import { Inter } from "next/font/google";
import DashboardHeader from "../Component/AuthorizedComponent/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../Component/AuthorizedComponent/DashboardSidebar/DashboardSidebar";
// import '../globals.css'

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
        <main className="">
          <div>
            <DashboardSidebar />
          </div>
          <div className="grow p-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
