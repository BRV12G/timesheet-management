"use client";
// import TimesheetEntry from "@/components/TimesheetEntry";
// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// type Params = { params: { weekId: string } };

// export default function TimesheetWeekPage({ params }: Params) {
//   const entries = timesheetEntries[params.weekId];
//   if (!entries) return notFound();
//   const { weekId } = useParams();
//   const [entries, setEntries] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//     const [range, setRange] = useState<string>("");
//       const [days, setDays] = useState<string[]>([]);

//   const days = ["Jan 21", "Jan 22", "Jan 23", "Jan 24", "Jan 25"];

//   useEffect(() => {
//     const fetchEntries = async () => {
//       const res = await fetch(`/api/timesheets/${weekId}`);
//       if (res.ok) {
//         const json = await res.json();
//         // setEntries(json);
//         setEntries(json.entries || []);
//         setRange(json.range || "");
//         setDays(json.days || []);

//       }
//       setLoading(false);
//     };
//     fetchEntries();
//   }, [weekId]);

//    if (loading) return <p className="p-10">Loading...</p>;
//   if (!entries.length) return <p className="p-10">No entries found.</p>;
//   return (
//     <div className="bg-gray-50">
//               <Header />

//     <main className="p-10 ml-20 mr-20 ">
//         <div className=" bg-white p-6 rounded-lg shadow-md ">

//       <h2 className="text-2xl font-bold mb-2">This week&#39;s timesheet</h2>
//       <p className="text-sm text-gray-500 mb-4 font-normal">{range}</p>

{
  /* {days.map((day) => (
        <div key={day} className="mb-6">
          <h3 className="font-semibold mb-2">{day}</h3>
          {(entries || [])
            .filter((e) => e.date === day)
            .map((e) => (
              <div
                key={e.id}
                className="p-4 border rounded flex justify-between items-center mb-2"
              >
                <div>
                  <p>{e.task}</p>
                  <p className="text-sm text-gray-500">{e.hours} hrs</p>
                </div>
                <div className="text-sm text-blue-600">{e.project}</div>
              </div>
            ))}
          <button className="text-sm text-blue-600 underline">
            + Add new task
          </button>
        </div>
      ))} */
}
//       {days.map((day) => (
//   <div key={day} className="mb-6 flex flex-row  gap-4">
//     <h3 className="font-semibold mb-2 text-gray-900 text-lg">{day}</h3>
//     <div>
//     {(entries || [])
//       .filter((e) => e.date === day)
//       .map((e) => (
//         <TimesheetEntry
//           key={e.id}
//           task={e.task}
//           hours={e.hours}
//           project={e.project}
//         />
//       ))}
//     <button className="text-sm text-blue-600 underline">
//       + Add new task
//     </button>
//     </div>
//   </div>
// ))}
//         </div>
//           <Footer />

//     </main>
//     </div>
//   );
// }

import TimesheetEntry from "@/components/TimesheetEntry";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaPlus } from "react-icons/fa6";
import AddTaskModal from "@/components/AddTaskModal";


type Params = { params: { weekId: string } };

export default function TimesheetWeekPage({ params }: Params) {
  const { weekId } = useParams();
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<string>("");
  const [days, setDays] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddEntry = (newEntry: {
  task: string;
  hours: number;
  project: string;
  type: string;
}) => {
  const today = days[0]; // default: assign to first day — or customize

  setEntries((prev) => [
    ...prev,
    {
      ...newEntry,
      date: today,
      id: Date.now(), // temp ID
    },
  ]);
};

  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch(`/api/timesheets/${weekId}`);
      if (res.ok) {
        const json = await res.json();
        setEntries(json.entries || []);
        setRange(json.range || "");
        setDays(json.days || []);
      }
      setLoading(false);
    };
    fetchEntries();
  }, [weekId]);

  const totalHours = entries.reduce((sum, e) => sum + (e.hours || 0), 0);
  const maxHours = 40;
  const progressPercent = Math.min((totalHours / maxHours) * 100, 100);

  if (loading) return <p className="p-10">Loading...</p>;
  if (!entries.length) return <p className="p-10">No entries found.</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="p-6 md:px-20">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold">This week&#39;s timesheet</h2>
            <div className="text-right text-sm font-medium text-gray-600">
              <p className="text-orange-500">{totalHours}/{maxHours} hrs</p>
              <p className="text-xs text-gray-400">{Math.round(progressPercent)}%</p>
            </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
              className="bg-orange-500 h-2.5 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          </div> */}

          <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
            {/* Left side: heading + date */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                This week&#39;s timesheet
              </h2>
            </div>

            {/* Right side: hours, percentage, progress bar */}
            <div className="flex flex-col items-end sm:w-1/3 min-w-[200px] relative">
              <span className=" text-sm font-medium text-gray-900 mx-14" id="2">
                {totalHours}/{maxHours} hrs
              </span>
              <div className="relative  flex flex-col justify-between  mb-1 text-sm text-gray-600 font-medium text-right">
                {/* <span className="text-orange-500 ">
                  {totalHours}/{maxHours} hrs
                </span> */}
                <span className="text-gray-400   " id="3">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className=" bg-gray-200 rounded-full h-2 w-50 ">
                <div
                  className="bg-orange-400 h-2 rounded-sm right-0"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4 font-normal">{range}</p>

          {/* Daily entries */}
          {days.map((day) => (
            <div key={day} className="mb-8  flex flex-row gap-4 items-start">
              <div className="min-w-[70px] pt-1">
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {day}
                </h3>
              </div>
              <div className="flex flex-col gap-2 ml-4 flex-1">
                {/* <h3 className="font-medium text-gray-900 text-sm mb-2">{day}</h3> */}
                {entries
                  .filter((e) => e.date === day)
                  .map((e) => (
                    <TimesheetEntry
                      key={e.id}
                      //   day={day}
                      task={e.task}
                      hours={e.hours}
                      project={e.project}
                    />
                  ))}
                <button onClick={() => setShowModal(true)} className="text-sm text-gray-500 hover:bg-blue-100 px-3 py-2 border border-dotted cursor-pointer hover:border-blue-700 border-gray-300 rounded-md hover:text-blue-700  text-center flex items-center justify-center gap-1  transition-colors">
                  <FaPlus size={10} /> <span className="ml-1 ">Add new task</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      {showModal && <AddTaskModal onClose={() => setShowModal(false)} onAddEntry={handleAddEntry} />}
    </div>
  );
}
