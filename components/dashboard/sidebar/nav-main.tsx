"use client";

import { Icon } from "@iconify/react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function NavMain({
  main,
}: {
  main: {
    name: string;
    url: string;
    icon: string;
  }[];
}) {
    const pathname = usePathname();
  return (
    <SidebarGroup className="">
      <div className="group-data-[collapsible=icon]:hidden px-4 py-2 text-base uppercase font-semibold text-sidebar-foreground/70">
        Main Menu
      </div>
      <SidebarMenu>
        {main.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild isActive={item.url === pathname}>
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
