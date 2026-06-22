import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type RouteContext = {
    params: Promise<{ slug: string }>;
};

interface UploadResponse {
    src: string;
    fileName: string;
    originalName: string;
}

const maxFileSize = 8 * 1024 * 1024;

const allowedMimeTypes = new Map<string, string>([
    ["image/jpeg", "jpg"],
    ["image/png", "png"],
    ["image/webp", "webp"],
    ["image/gif", "gif"],
    ["image/svg+xml", "svg"],
]);

const sanitizeSegment = (value: string, fallback: string): string => {
    const sanitized = value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9-_]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return sanitized || fallback;
};

const getFileBaseName = (fileName: string): string => {
    const parsed = path.parse(fileName);
    return sanitizeSegment(parsed.name, "image");
};

const createStoredFileName = (file: File): string => {
    const extension = allowedMimeTypes.get(file.type);

    if (!extension) {
        throw new Error("Format d’image non pris en charge. Formats acceptés : jpg, png, webp, gif, svg.");
    }

    const timeStamp = new Date().toISOString().replace(/[:.]/g, "-");
    return `${timeStamp}-${getFileBaseName(file.name)}.${extension}`;
};

export async function POST(request: Request, context: RouteContext) {
    try {
        const { slug } = await context.params;
        const safeSlug = sanitizeSegment(slug, "cours");
        const formData = await request.formData();
        const image = formData.get("image");

        if (!(image instanceof File)) {
            return NextResponse.json({ message: "Aucun fichier image n’a été reçu." }, { status: 400 });
        }

        if (image.size <= 0) {
            return NextResponse.json({ message: "Le fichier image est vide." }, { status: 400 });
        }

        if (image.size > maxFileSize) {
            return NextResponse.json({ message: "L’image dépasse la limite de 8 Mo." }, { status: 400 });
        }

        if (!allowedMimeTypes.has(image.type)) {
            return NextResponse.json(
                { message: "Format d’image non pris en charge. Formats acceptés : jpg, png, webp, gif, svg." },
                { status: 400 },
            );
        }

        const uploadsDirectory = path.join(process.cwd(), "public", "cours", safeSlug, "uploads");
        const storedFileName = createStoredFileName(image);
        const storedFilePath = path.join(uploadsDirectory, storedFileName);
        const buffer = Buffer.from(await image.arrayBuffer());

        await fs.mkdir(uploadsDirectory, { recursive: true });
        await fs.writeFile(storedFilePath, buffer);

        const response: UploadResponse = {
            src: `/cours/${safeSlug}/uploads/${storedFileName}`,
            fileName: storedFileName,
            originalName: image.name,
        };

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json(
            {
                message: error instanceof Error ? error.message : "Impossible d’importer l’image localement.",
            },
            { status: 400 },
        );
    }
}
