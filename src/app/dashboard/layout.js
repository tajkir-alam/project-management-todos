import { Inter } from "next/font/google";
import "../globals.css";
import DashboardHeader from "../Component/AuthorizedComponent/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../Component/AuthorizedComponent/DashboardSidebar/DashboardSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Management Tool",
  description: "Manage your projects from here",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardHeader />
        <main className="flex max-w-[1536px] mx-auto">
          <div>
            <DashboardSidebar />
          </div>
          <div className="grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
