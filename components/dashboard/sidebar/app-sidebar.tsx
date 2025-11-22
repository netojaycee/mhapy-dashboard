"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavGeneral, NavMain, NavUser } from "./";
import Logo from "@/components/shared/Logo";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "Therapist Name",
    email: "therapist@mhapy.com",
    avatar: "/images/account-avatar.png",
  },
  main: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "mage:dashboard",
    },
    {
      name: "Therapist",
      url: "/dashboard/therapist",
      icon: "mingcute:user-4-line",
    },
    {
      name: "Calendar",
      url: "/dashboard/calendar",
      icon: "hugeicons:calendar-01",
    },
    {
      name: "Notes",
      url: "/dashboard/notes",
      icon: "mdi:note-text-outline",
    },
    {
      name: "Message",
      url: "/dashboard/messages",
      icon: "mynaui:message-dots",
    },
    {
      name: "Pricing",
      url: "/dashboard/pricing",
      icon: "famicons-card-outline",
    },
  ],
  general: [
    {
      name: "Homework",
      url: "/dashboard/homework",
      icon: "akar-icons:book",
    },
    {
      name: "API Key",
      url: "/dashboard/api-key",
      icon: "mdi:key-outline",
    },
    {
      name: "Settings",
      url: "/dashboard/settings",
      icon: "mdi:cog-outline",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-[#44189008]" collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center group-data-[collapsible=icon]:hidden">
        <Logo />
      </SidebarHeader>
      <SidebarHeader className="items-center group-data-[collapsible=icon]:flex hidden">
        {" "}
        <Image
          src="/images/logo-crown.png"
          alt="mhapy Logo"
          width={170}
          height={40}
          priority
          className="rounded-lg object-contain"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain main={data.main} />
        <NavGeneral projects={data.general} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
