import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh">
        <GlassPane className="w-full h-full flex items-center ">
          <Sidebar></Sidebar>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
