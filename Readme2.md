#  TickTock – Timesheet Management App

A small SaaS-style timesheet web app built using **Next.js 15**, **NextAuth**, and **Tailwind CSS**, with mock APIs and modular components.

---

##  Features

- Login using **NextAuth Credentials Provider**
- Dashboard showing weekly timesheets
- View/add tasks for each week
- Internal API routes (no direct mock data access)
- Fully responsive UI
- Reusable and scalable component structure Header Footer
-Form validation and error handling for the creation form


---

## ⚙️ Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/your-username/ticktock-timesheet.git  
cd ticktock-timesheet
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Visit: http://localhost:3000

---

##  Mock Login Credentials

Use the following hardcoded credentials:

Email: bhairavi@example.com  
Password: Hello@123g

Note: Password must conatain atleast 6 letters, 1 number, 1 caapital letter and 1 special symbol.



---

##  Tech Stack

- Next.js 15 (App Router)
- TypeScript
- NextAuth.js – Auth and session management
- Tailwind CSS 
- React Icons
- Inter – Google Font

---

##  Folder Structure

timesheet-management/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts
│   │   │   └── timesheets/
│   │   │       ├── route.ts
│   │   │       └── [weekId]/
│   │   │           └── route.ts
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── timesheet/
│   │   │   ├
│   │   │   └── [weekId]/
│   │   │       └── page.tsx
│   │   ├── test/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AddTaskModal.tsx
│   │   ├── AuthProvider.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── TimesheetEntry.tsx
│   │   └── TimesheetTable.tsx
│   └── lib/
│       ├── auth.ts
│       └── data.ts
├── .gitignore
└── eslint.config.mjs

---

##  Assumptions & Notes

- Dummy login is used via NextAuth credentials provider
- All timesheet and user data is mock and stored in `lib/data.ts`
- API routes serve mock data – components do not access mock data directly

---

##  Time Spent

- **1.5–2 hours**: API setup, mock data, and basic (non-Figma-matched) styling  
- **4–6 hours**: Styling and pixel-perfect UI matching with Figma  
- **1–2 hours**: Add/Edit modal implementation for timesheet entries  
- **30–45 minutes**: Making the layout responsive  
- **30–45 minutes**: Form validation and code formatting  
- **15–20 minutes**: Deployment on Vercel  
- **20–30 minutes**: README documentation and polishing  
- **🕒 Total Time Spent**: ~9 to 12 hours

---

##  Author

Made by Bhairavi Gawas  
For educational and evaluation purposes only
