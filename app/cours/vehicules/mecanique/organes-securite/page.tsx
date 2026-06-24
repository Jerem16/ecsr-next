import { redirect } from "next/navigation";

export default function MecaniqueAnchorRedirectPage() {
    redirect("/cours/vehicules/mecanique#parties-prevues");
}
