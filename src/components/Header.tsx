"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const name = session?.user?.email?.split("@")[0];
  const handleLogout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg w-[320px] text-center">
            <h1 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Logout
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/login" });
                  onClose();
                }}
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer"
              >
                Yes
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                No
              </button>
            </div>
          </div>
        );
      },
    });
  };

  return (
    <header className="w-full h-[68px] flex items-center justify-between px-4 sm:px-6 md:px-8 bg-white shadow-lg">
      {/* Left side */}
      <div className="flex items-center gap-6 sm:gap-10">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 sm:gap-3  w-auto h-[36px]"
        >
          <span className="text-2xl font-bold text-gray-900">ticktock</span>
        </Link>
        <span className="text-sm font-medium text-gray-900 hidden md:inline-block ">
          Timesheets
        </span>
      </div>

      {/* Right side: Username and Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-md text-gray-500 hover:text-black focus:outline-none flex items-center gap-1 font-medium text-base cursor-pointer"
        >
           <span className="max-w-[100px] truncate">{name}</span>
          <span className="text-md">
            <RiArrowDropDownLine size={24} />
          </span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-28 bg-white  rounded-lg shadow-lg z-10">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-blue-600 hover:text-white hover:rounded-lg text-gray-500 font-medium cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
