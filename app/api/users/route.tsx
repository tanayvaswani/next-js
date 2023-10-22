import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

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

  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json(body, { status: 201 });
}
