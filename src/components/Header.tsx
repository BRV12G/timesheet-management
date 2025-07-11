// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useState } from "react";

// export default function Header() {
//   const { data: session } = useSession();
//   const [open, setOpen] = useState(false);

//   // Extract username from email or name
//   const name = session?.user?.name || session?.user?.email?.split("@")[0] || "User";

//   return (
//     <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-sm">
//       <div className="flex items-center space-x-4 text-black">
//         <h1 className="text-lg font-bold">ticktock</h1>
//         <span className="text-sm text-gray-500">Timesheets</span>
//       </div>
//       <div className="relative">
//         <button
//           onClick={() => setOpen((prev) => !prev)}
//           className="text-sm text-gray-700 hover:text-black focus:outline-none"
//         >
//           {name} <span className="ml-1">▾</span>
//         </button>
//         {open && (
//           <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-md z-10">
//             <button
//               onClick={() => signOut({ callbackUrl: "/login" })}
//               className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }


"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const name =
     session?.user?.email?.split("@")[0] ;

  return (
    <header className="w-full h-[68px] flex items-center justify-between px-4  bg-white shadow-lg">
      {/* Left side: Logo + ticktock + Timesheets */}
      <div className="flex items-center gap-12">
        <Link href="/dashboard" className="flex items-center gap-3 w-auto h-[36px]">
          <span className="text-2xl font-bold text-gray-900">ticktock</span>
        </Link>
        <span className="text-sm font-medium text-gray-900 font-inter">
          Timesheets
        </span>
      </div>

      {/* Right side: Username + Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="text-md text-gray-500 hover:text-black focus:outline-none flex items-center gap-1 font-medium text-base"
        >
          {name} <span className="text-md"><RiArrowDropDownLine  size={24}/></span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-28 bg-white  rounded-lg shadow-lg z-10">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-500 font-medium"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
