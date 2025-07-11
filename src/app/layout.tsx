import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });


export const metadata = {
  title: "TickTock",
  description: "Timesheet Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
