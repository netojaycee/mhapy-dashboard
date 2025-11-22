"use client";
import { CustomTabs, TabItem } from "@/components/dashboard/custom-tabs";
import { ClientTab, HealthProfileTab, PortalTab } from "./(components)";

export default function Dashboard() {
  const tabs: TabItem[] = [
    {
      id: "portal",
      label: "Portal",
      content: <PortalTab />,
    },
    {
      id: "client",
      label: "Client",
      content: <ClientTab />,
    },
    {
      id: "health-profile",
      label: "Health Profile",
      content: <HealthProfileTab />,
    },
  ];

  return (
    <div className="">
      <CustomTabs
        tabs={tabs}
        persistKey="dashboard-main-tabs"
        listClassName="md:w-1/3 w-2/3"
        triggerClassName="text-[#25252580] data-[state=active]:text-black"
        contentClassName="pt-4"
      />
    </div>
  );
}
