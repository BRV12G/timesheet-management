// lib/data.ts

export const users = [
  {
    id: "1",
    email: "name@example.com",
    password: "password123", // dummy password
    name: "John Doe",
  },
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

export const timesheetEntries = {
  "5": [
    {
      id: "entry-1",
      date: "Jan 21",
      task: "Homepage Development",
      hours: 4,
      project: "Project Name",
    },
    {
      id: "entry-2",
      date: "Jan 21",
      task: "Homepage Development",
      hours: 4,
      project: "Project Name",
    },
    {
      id: "entry-3",
      date: "Jan 22",
      task: "Homepage Development",
      hours: 4,
      project: "Project Name",
    },
  ],
};
