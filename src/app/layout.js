import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./Providers/ReactQueryProvider/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Management Tool",
  description: "Manage your projects from here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
