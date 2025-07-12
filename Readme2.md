# ⏱️ TickTock – Timesheet Management App

A small SaaS-style timesheet web app built using **Next.js 15**, **NextAuth**, and **Tailwind CSS**, with mock APIs and modular components.

---

## 🚀 Features

- Login using **NextAuth Credentials Provider**
- Dashboard showing weekly timesheets
- View/update tasks for each week
- Internal API routes (no direct mock data access)
- Secure session/token handling
- Fully responsive UI
- Reusable and scalable component structure

---

## ⚙️ Setup Instructions

### 1. Clone the project

git clone https://github.com/your-username/ticktock-timesheet.git  
cd ticktock-timesheet

### 2. Install dependencies

npm install

### 3. Create environment variables

Create a `.env.local` file in the root:

NEXTAUTH_SECRET=your-secret-key  
NEXTAUTH_URL=http://localhost:3000

💡 Generate a secret using:  
openssl rand -base64 32

### 4. Start the development server

npm run dev

Visit: http://localhost:3000

---

## 🔐 Mock Login Credentials

Use the following hardcoded credentials:

Email: john@example.com  
Password: 123456

Credentials are defined in:  
`/app/api/auth/[...nextauth]/route.ts`

---

## 🛠️ Tech Stack

- Next.js 15 (App Router)
- TypeScript
- NextAuth.js – Auth and session management
- Tailwind CSS – Utility-first styling
- React Icons
- Inter – Google Font

---

## 📁 Folder Structure

src/  
├── app/  
│   ├── login/                 → Login form  
│   ├── dashboard/             → Timesheet dashboard  
│   ├── timesheet/[weekId]/   → Weekly timesheet details  
│   └── api/                   → Internal API routes  
├── components/                → Header, TimesheetEntry, etc.  
├── lib/                       → Mock data and utility files  

---

## 📌 Assumptions & Notes

- Dummy login is used via NextAuth credentials provider
- All timesheet and user data is mock and stored in `lib/data.ts`
- API routes serve mock data – components do not access mock data directly
- Timesheet weeks include only 5 weekdays
- Header and logout only appear on authenticated pages

---

## ⏱️ Time Spent

~6 to 8 hours  
Includes UI layout, authentication, mock data APIs, modular component setup, and styling

---

## 👤 Author

Made by Bhairavi Gawas  
For educational and evaluation purposes only
