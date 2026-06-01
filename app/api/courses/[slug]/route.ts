import { NextResponse } from "next/server";
import { saveEditableCourse } from "@/features/courses/editor/server/courseFileRepository";
import { parseCourse } from "@/features/courses/editor/server/validateCourse";

export const runtime = "nodejs";

type RouteContext = {
    params: Promise<{ slug: string }>;
};

export async function PUT(request: Request, context: RouteContext) {
    try {
        await context.params;
        const payload = (await request.json()) as unknown;
        const course = parseCourse(payload);
        const savedCourse = await saveEditableCourse(course);

        return NextResponse.json({
            course: savedCourse,
            message: "Cours sauvegardé localement.",
        });
    } catch (error) {
        return NextResponse.json(
            {
                message: error instanceof Error ? error.message : "Impossible de sauvegarder le cours localement.",
            },
            { status: 400 },
        );
    }
}
