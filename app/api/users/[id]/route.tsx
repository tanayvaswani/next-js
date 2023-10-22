import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // GET api/users/:id
  // fetch data from a db
  // if (!data) 404
  // else return data

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "Tanay" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Validate req body
  // fetch user with ID
  // if invalid body => 400
  // if user doesn't exists => 404
  // update the user => updated user

  const body = await request.json();
  if (!body.name || !body.age) {
    return NextResponse.json({ error: "Invalid age or name" }, { status: 400 });
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  if (!body.name || !body.age) {
    return NextResponse.json({ error: "Invalid age or name" }, { status: 400 });
  }
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({});
}
