import MobileNavbar from "../componets/MobileNavbar";
import Sidebar from "../componets/Sidebar";
import Footer from "../componets/parts/Footer";
import ScrollUpButton from "../utlis/ScrollUpButton";

export default function HomeLayout({ children }) {
  return (
    <div>
      <div className="flex min-h-screen relative">
        <div className="md:w-2/6 lg:w-1/6 bg-violet-700 hidden md:block z-100">
          <Sidebar />
        </div>
        <div className="w-full content md:w-4/6 lg:w-5/6 bg-slate-200 overflow-hidden">
          {/* Mobile Navbar  */}
          <MobileNavbar />
          {children}
          <ScrollUpButton />
          <Footer />
        </div>
      </div>
    </div>
  );
}
