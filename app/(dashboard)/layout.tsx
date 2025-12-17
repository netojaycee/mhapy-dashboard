import { AppSidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader userName="John" />
        <div className="flex flex-1 flex-col gap-4 px-2 py-2">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
