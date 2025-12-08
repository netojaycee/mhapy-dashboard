"use client";
import { CustomTabs, TabItem } from "@/components/dashboard/custom-tabs";
import TeamMembers from "./(components)/TeamMembers";
import FindTeamMember from "./(components)/FindTeamMember";

export default function Therapists() {
  const tabs: TabItem[] = [
    {
      id: "team-members",
      label: "Team Members",
      content: <TeamMembers />,
    },
    {
      id: "find-team-member",
      label: "Find Team Member",
      content: <FindTeamMember />,
    }
  ];

  return (
    <div className="">
      <CustomTabs
        tabs={tabs}
        persistKey="therapists-main-tabs"
        listClassName="md:w-1/3 w-2/3"
        triggerClassName="text-[#25252580] data-[state=active]:text-black"
        contentClassName="pt-4"
      />
    </div>
  );
}
