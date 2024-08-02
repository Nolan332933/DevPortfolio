"use client";
import { useRouter } from "next/navigation";
import { AdminSidebar } from "../components/sidebar/Sidebar";
import DashboardHeader from "../components/header/DashboardHeader";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/admin/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex">
      <div className="">
        <AdminSidebar handleLogout={handleLogout} />
      </div>
      <div className="w-full">
        <DashboardHeader />
        <div className="mx-10">{children}</div>
      </div>
    </div>
  );
}
