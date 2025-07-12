// app/api/timesheets/[weekId]/route.ts
// import { timesheetEntries } from "@/lib/data";
// import { NextResponse } from "next/server";

// export async function GET(
//   request: Request,
//   { params }: { params: { weekId: string } }
// ) {
//   const weekData = timesheetEntries[params.weekId];
//   if (!weekData) {
//     return new NextResponse("Timesheet not found", { status: 404 });
//   }

//   return NextResponse.json(weekData); // contains `range` and `entries`
// }

// src/app/api/timesheets/[weekId]/route.ts
import { timesheetEntries } from "@/lib/data";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ weekId: string }> } // <-- note the promise
) {
  const { weekId } = await context.params;

  const weekData = timesheetEntries[weekId];
  if (!weekData) {
    return new NextResponse("Timesheet not found", { status: 404 });
  }

  return NextResponse.json(weekData);
}
