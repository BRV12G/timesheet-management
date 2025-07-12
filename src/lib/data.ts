// lib/data.ts

export const users = [
  {
    id: "1",
    email: "name@example.com",
    password: "Gawas304@", // dummy password
    name: "bhairavi Doe",
  },
  {
    id: "2",
    email: "bhairavi@example.com ",
    password: "Hello@123g", // dummy password
    name: "Bhairavi Gawas",
   
  }
];

export const timesheets = [
  {
    id: "1",
    week: 1,
    date: "1 - 5 January, 2024",
    status: "COMPLETED",
  },
  {
    id: "2",
    week: 2,
    date: "8 - 12 January, 2024",
    status: "COMPLETED",
  },
  {
    id: "3",
    week: 3,
    date: "15 - 19 January, 2024",
    status: "INCOMPLETE",
  },
  {
    id: "4",
    week: 4,
    date: "22 - 26 January, 2024",
    status: "COMPLETED",
  },
  {
    id: "5",
    week: 5,
    date: "28 January - 1 February, 2024",
    status: "MISSING",
  },
];

// export const timesheetEntries = {
//   "5": [
//     {
//       id: "entry-1",
//       date: "Jan 21",
//       task: "Homepage Development",
//       hours: 4,
//       project: "Project Name",
//     },
//     {
//       id: "entry-2",
//       date: "Jan 21",
//       task: "Homepage Development",
//       hours: 4,
//       project: "Project Name",
//     },
//     {
//       id: "entry-3",
//       date: "Jan 22",
//       task: "Homepage Development",
//       hours: 4,
//       project: "Project Name",
//     },
//   ],
// };


// export const timesheetEntries = {
//   "1": {
//     range: "01 - 07 January, 2024",
//     entries: [
//       {
//         id: "entry-1",
//         date: "Jan 01",
//         task: "Project Planning",
//         hours: 3,
//         project: "Website Redesign",
//       },
//       {
//         id: "entry-2",
//         date: "Jan 03",
//         task: "Wireframe Design",
//         hours: 5,
//         project: "Website Redesign",
//       },
//     ],
//   },
//   "2": {
//     range: "08 - 14 January, 2024",
//     entries: [
//       {
//         id: "entry-3",
//         date: "Jan 08",
//         task: "UI Development",
//         hours: 6,
//         project: "E-commerce Platform",
//       },
//       {
//         id: "entry-4",
//         date: "Jan 10",
//         task: "Component Styling",
//         hours: 4,
//         project: "E-commerce Platform",
//       },
//     ],
//   },
//   "3": {
//     range: "15 - 21 January, 2024",
//     entries: [
//       {
//         id: "entry-5",
//         date: "Jan 15",
//         task: "API Integration",
//         hours: 5,
//         project: "CRM System",
//       },
//       {
//         id: "entry-6",
//         date: "Jan 17",
//         task: "Testing and Debugging",
//         hours: 3,
//         project: "CRM System",
//       },
//     ],
//   },
//   "4": {
//     range: "22 - 28 January, 2024",
//     entries: [
//       {
//         id: "entry-7",
//         date: "Jan 22",
//         task: "Feature Enhancement",
//         hours: 4,
//         project: "Inventory Management",
//       },
//       {
//         id: "entry-8",
//         date: "Jan 25",
//         task: "Code Review",
//         hours: 2,
//         project: "Inventory Management",
//       },
//     ],
//   },
//   "5": {
//     range: "29 January - 04 February, 2024",
//     entries: [
//       {
//         id: "entry-9",
//         date: "Jan 29",
//         task: "Homepage Development",
//         hours: 4,
//         project: "Project Name",
//       },
//       {
//         id: "entry-10",
//         date: "Jan 30",
//         task: "Fix bugs",
//         hours: 6,
//         project: "Mobile App",
//       },
//     ],
//   },
// };

type TimesheetEntry = {
  range: string;
  days: string[];
  entries: {
    id: string;
    date: string;
    task: string;
    hours: number;
    project: string;
  }[];
};


export const timesheetEntries: Record<string, TimesheetEntry> = {
  "1": {
    range: "01 - 07 January, 2024",
    days: ["Jan 01", "Jan 02", "Jan 03", "Jan 04", "Jan 05"],
    entries: [
      {
        id: "entry-1",
        date: "Jan 01",
        task: "Project Planning",
        hours: 3,
        project: "Website Redesign",
      },
      {
      id: "entry-1b",
      date: "Jan 01",
      task: "Client Meeting",
      hours: 2,
      project: "gencom",
    },
      {
        id: "entry-2",
        date: "Jan 03",
        task: "Wireframe Design",
        hours: 5,
        project: "Website Redesign",
      },
    ],
  },
  "2": {
    range: "08 - 14 January, 2024",
    days: ["Jan 08", "Jan 09", "Jan 10", "Jan 11", "Jan 12"],
    entries: [
      {
        id: "entry-3",
        date: "Jan 08",
        task: "UI Development",
        hours: 6,
        project: "E-commerce Platform",
      },
      {
        id: "entry-4",
        date: "Jan 10",
        task: "Component Styling",
        hours: 4,
        project: "E-commerce Platform",
      },
    ],
  },
  "3": {
    range: "15 - 21 January, 2024",
    days: ["Jan 15", "Jan 16", "Jan 17", "Jan 18", "Jan 19"],
    entries: [
      {
        id: "entry-5",
        date: "Jan 15",
        task: "API Integration",
        hours: 5,
        project: "CRM System",
      },
      {
        id: "entry-6",
        date: "Jan 17",
        task: "Testing and Debugging",
        hours: 3,
        project: "CRM System",
      },
    ],
  },
  "4": {
    range: "22 - 28 January, 2024",
    days: ["Jan 22", "Jan 23", "Jan 24", "Jan 25", "Jan 26"],
    entries: [
      {
        id: "entry-7",
        date: "Jan 23",
        task: "Feature Enhancement",
        hours: 4,
        project: "Inventory Management",
      },
      {
        id: "entry-8",
        date: "Jan 25",
        task: "Code Review",
        hours: 2,
        project: "Inventory Management",
      },
    ],
  },
  "5": {
    range: "29 January - 04 February, 2024",
    days: ["Jan 29", "Jan 30", "Jan 31", "Feb 01", "Feb 02"],
    entries: [
      {
        id: "entry-9",
        date: "Jan 29",
        task: "Homepage Development",
        hours: 4,
        project: "Project Name",
      },
      {
        id: "entry-10",
        date: "Jan 30",
        task: "Fix bugs",
        hours: 6,
        project: "Mobile App",
      },
    ],
  },
};



