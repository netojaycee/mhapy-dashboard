"use client";

import { Icon } from "@iconify/react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavGeneral({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: string;
  }[];
}) {
  return (
    <SidebarGroup className="">
      <div className="group-data-[collapsible=icon]:hidden px-4 py-2 text-base uppercase font-semibold text-sidebar-foreground/70">
        Projects
      </div>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <Icon icon={item.icon} />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
