import { SlOptions } from "react-icons/sl";
import { useState, useRef, useEffect } from "react";
import EditModal from "@/components/EditModal"; 


type Props = {
  task: string;
  hours: number;
  project: string;

};

export default function TimesheetEntry({ task, hours, project }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false); 

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-2.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 w-full">
      <div className="flex flex-row gap-0.5">
        <p className="text-base font-medium text-gray-900">{task}</p>
      </div>

      <div className="flex items-center gap-4 justify-between">
        <p className="text-sm text-gray-400 leading-tight font-normal">
          {hours} hrs
        </p>

        <span className="text-xs text-blue-600 py-0.5 px-2.5 font-medium bg-blue-100 rounded-md">
          {project}
        </span>
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setShowDropdown((prev) => !prev)}>
            <SlOptions
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              size={16}
            />
          </button>

          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-[97px] bg-white border border-gray-200 rounded-lg shadow-md z-10 flex flex-col gap-2">
              <button className="w-full text-left px-4 py-2 font-normal text-sm hover:bg-gray-100 text-gray-700 cursor-pointer" 
              onClick={() => {setShowEditModal(true); setShowDropdown(false);} }
              >
                Edit
              </button>
              <button className="w-full text-left px-4 py-2 text-sm font-normal text-red-600 hover:bg-gray-100 cursor-pointer">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

    {showEditModal && (
        <EditModal
          isEditing
          onClose={() => setShowEditModal(false)}
          initialData={{
            task,
            hours,
            project,
            type: "Bug fixes", // <-- Default type (adjust as needed)
          }}
          onSubmit={(editedData) => {
            console.log("Edited Entry:", editedData);
            setShowEditModal(false);
          }}
        />
      )}
    </>
  );
}
