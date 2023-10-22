import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // get users from a db // hard coded for now
  return NextResponse.json([
    { id: 1, name: "Tanay" },
    { id: 2, name: "Tanay2" },
    { id: 3, name: "Tanay3" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Invalid/Empty name" }, { status: 400 });
  }

  return NextResponse.json(body, { status: 201 });
}
