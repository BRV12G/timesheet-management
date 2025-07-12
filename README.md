#  TickTock – Timesheet Management App

A small SaaS-style timesheet web app built using **Next.js 15**, **NextAuth**, and **Tailwind CSS**, with mock APIs and modular components.
 
 **Live Demo**: [Click here](https://timesheet-management-xi.vercel.app)
---

##  Features

- Login using **NextAuth Credentials Provider**
- Dashboard showing weekly timesheets
- View/add tasks for each week
- Internal API routes (no direct mock data access)
- Fully responsive UI
- Reusable and scalable component structure Header Footer
-Form validation and error handling for the creation form
- Logout Functionality


---

##  Setup Instructions

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
- Git/Github - version control (Conventional commits used)
- Vercel - deployment

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
- **Total Time Spent**: ~9 to 12 hours

---

##  Author

Bhairavi Gawas  
For educational and evaluation purposes only


## Tasks to be achived
1. add a view password button
2. add pop up showing succefully logged in
3. functionality for edit- delete button
5. add data properly
6. unit tests
7. add a nice loader 
8. if no entries in the timesheet than show atleast add buttons with dates.