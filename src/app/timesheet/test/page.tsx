'use client';
import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';

const data = [
  { date: 'Jan 21', tasks: ['Homepage Development', 'Homepage Development'] },
  { date: 'Jan 22', tasks: ['Homepage Development', 'Homepage Development', 'Homepage Development'] },
  { date: 'Jan 23', tasks: ['Homepage Development', 'Homepage Development', 'Homepage Development'] },
  { date: 'Jan 24', tasks: ['Homepage Development', 'Homepage Development', 'Homepage Development'] },
  { date: 'Jan 25', tasks: [] },
];

export default function TimesheetPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {data.map((entry, index) => (
        <DaySection key={index} date={entry.date} tasks={entry.tasks} />
      ))}
    </div>
  );
}

function DaySection({ date, tasks }: { date: string; tasks: string[] }) {
  const [taskList, setTaskList] = useState(tasks);

  const handleAddTask = () => {
    setTaskList([...taskList, 'Homepage Development']);
  };

  const handleDelete = (i: number) => {
    const updated = taskList.filter((_, index) => index !== i);
    setTaskList(updated);
  };

  return (
    <div className="mb-6">
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      {taskList.map((task, i) => (
        <TaskCard
          key={i}
          title={task}
          onDelete={() => handleDelete(i)}
        />
      ))}
      <button
        onClick={handleAddTask}
        className="cursor-pointer w-full text-sm text-blue-600 hover:underline py-1 mt-2"
      >
        + Add new task
      </button>
    </div>
  );
}

function TaskCard({ title, onDelete }: { title: string; onDelete: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white border rounded-lg px-4 py-2 mb-2 flex items-center justify-between relative shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs text-gray-500">4 hrs</span>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Project Name</span>
      </div>
      <div className="relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 hover:text-black ">
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-sm z-10">
            <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left">Edit</button>
            <button
              onClick={onDelete}
              className="block px-4 py-2 hover:bg-red-100 text-red-500 w-full text-left"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
