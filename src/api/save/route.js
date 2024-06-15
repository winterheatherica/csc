import prisma from "@/libs/prisma";

export async function POST(request) {
    const { method: methodLabel, alternatif: maxLabel } = await request.json();
    const currentDate = new Date();
    const data = {
        date: currentDate,
        method: methodLabel,
        alternatif: maxLabel,
    };

    const createHistory = await prisma.history.create({ data });
    if (!createHistory) return { status: 500, isCreated: false };
    else return { status: 200, isCreated: true };
}
