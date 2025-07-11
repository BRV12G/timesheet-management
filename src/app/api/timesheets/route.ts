// app/api/timesheets/route.ts
import { timesheets } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(timesheets);
}
