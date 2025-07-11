// components/TimesheetEntry.tsx

type Props = {
  task: string;
  hours: number;
  project: string;
};

export default function TimesheetEntry({ task, hours, project }: Props) {
  return (
    <div className="p-4 border rounded flex justify-between items-center mb-2">
      <div>
        <p>{task}</p>
        <p className="text-sm text-gray-500">{hours} hrs</p>
      </div>
      <div className="text-sm text-blue-600">{project}</div>
    </div>
  );
}
