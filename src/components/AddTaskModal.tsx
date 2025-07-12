import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

type Props = {
  onClose: () => void;
  onAddEntry: (entry: {
    task: string;
    hours: number;
    project: string;
    type: string;
  }) => void;
};

export default function AddTaskModal({ onClose, onAddEntry }: Props) {
  const [hours, setHours] = useState(12);
  const [errors, setErrors] = useState<{ project?: string; type?: string; task?: string }>({});


  return (
    <>
      <div
        className="fixed inset-0 bg-white/10 backdrop-blur-xs z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center shadow-sm">
        <div className="bg-white rounded-md w-full max-w-xl shadow-lg  relative">
          {/* Close Button */}
          <div className="border-b border-gray-200 px-5 py-5 items-center">
            <button
              onClick={onClose}
              className="absolute  right-4 text-gray-400 hover:text-gray-600 text-lg cursor-pointer"
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold  text-gray-900 ">
              Add New Entry
            </h2>
          </div>
          <div className="p-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.target as HTMLFormElement;
                const project = (form.project as HTMLSelectElement).value;
                const type = (form.type as HTMLSelectElement).value;
                const task = (form.task as HTMLTextAreaElement).value;

               
                const newErrors: typeof errors = {};
                if (!project) newErrors.project = "Please select a project";
                if (!type) newErrors.type = "Please select the type of work";
                if (!task || task.length < 10)
                  newErrors.task = "Task description should be at least 10 characters";

                setErrors(newErrors);
                if (Object.keys(newErrors).length > 0) return;

                onAddEntry({
                  task,
                  hours,
                  project,
                  type,
                });

                onClose();
              }}
              className="space-y-4"
            >
              {/* Project */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Select Project <span className="text-gray-900">*</span>
                  </label>
                  <FaInfoCircle className="text-gray-400 mt-[2px]" size={14} />
                </div>

                <select
                  name="project"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm font-normal leading-tight text-gray-500 bg-white"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">
                    Select a Project
                  </option>
                  <option value="project-a">Project A</option>
                  <option value="project-b">Project B</option>
                  <option value="project-c">Project C</option>
                </select>
                {errors.project && (
                  <p className="text-red-500 text-xs">{errors.project}</p>
                )}
              </div>
               
               {/* type */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <label className="block text-sm font-medium text-gray-900">
                    Type of Work <span className="text-gray-900">*</span>
                  </label>
                  <FaInfoCircle className="text-gray-400 mt-[2px]" size={14} />
                </div>

                <select
                  name="type"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm font-normal leading-tight text-gray-500 bg-white"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">
                    Select Type of work
                  </option>
                  <option>Bug fixes</option>
                  <option>New Feature</option>
                  <option>Code Review</option>
                </select>
                {errors.type && (
                  <p className="text-red-500 text-xs">{errors.type}</p>
                )}
              </div>

              {/* Task Description */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Task description <span className="text-gray-900">*</span>
                </label>
                <textarea
                  name="task"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
                  placeholder="Write text here ..."
                />
                <p className="text-xs text-gray-400 mt-1">
                  A note for extra info
                </p>
                {errors.task && (
                  <p className="text-red-500 text-xs">{errors.task}</p>
                )}
              </div>

              {/* Hours Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Hours <span className="text-gray-900">*</span>
                </label>
                <div className="flex items-center ">
                  <button
                    type="button"
                    className="w-8 h-8 border-r border-l border-t border-b rounded-l  border-gray-300 text-2xl flex items-center justify-center text-gray-900 bg-gray-100 cursor-pointer"
                    onClick={() => setHours((prev) => Math.max(prev - 1, 0))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={hours}
                    className="w-14 h-8 text-center text-gray-500 border border-gray-300  py-1 text-sm"
                    readOnly
                  />
                  <button
                    type="button"
                    className="w-8 h-8 border-l border-r border-t border-b rounded-r  border-gray-300 text-2xl  flex items-center justify-center text-gray-600 bg-gray-100 cursor-pointer"
                    onClick={() => setHours((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-between items-center  pt-4 mt-4 gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700 w-1/2 cursor-pointer"
                >
                  Add entry
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-gray-300 px-6 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 w-1/2 font-medium cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
