import prisma from "@/libs/prisma";

export async function POST(request) {
    const { alternatif: maxLabel } = await request.json();
    const currentDate = new Date().toLocaleString();
    const data = {
        date: currentDate,
        method: "WP",
        alternatif: maxLabel,
    };

    const createHistory = await prisma.history.create({ data });
    if (!createHistory) return { status: 500, isCreated: false };
    else return { status: 200, isCreated: true };
}
