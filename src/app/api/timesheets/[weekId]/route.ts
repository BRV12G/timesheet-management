// // app/api/timesheets/[weekId]/route.ts
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

import { timesheetEntries } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { weekId: number } }
) {
  const { weekId } = context.params;
  const weekData = timesheetEntries[weekId];

  if (!weekData) {
    return new NextResponse("Timesheet not found", { status: 404 });
  }

  return NextResponse.json(weekData); // contains `range` and `entries`
}

