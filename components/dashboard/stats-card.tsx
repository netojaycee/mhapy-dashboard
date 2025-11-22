"use client";

import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface StatsCardProps {
  icon: string;
  title: string;
  value: string | number;
  trend?: "positive" | "negative";
  trendValue?: string | number;
  variant?: "fill" | "outline";
}

export function StatsCard({
  icon,
  title,
  value,
  trend,
  trendValue,
  variant = "fill",
}: StatsCardProps) {
  const isFill = variant === "fill";
  const isPositive = trend === "positive";

  return (
    <div
      className={`p-4 rounded transition-all ${
        isFill
          ? "bg-primary text-white"
          : "bg-background border border-border text-foreground"
      }`}
    >
      {/* Header with Icon and Menu */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-xl ${
              isFill ? "bg-white/20" : `bg-[#4418904D] text-white`
            }`}
          >
            <Icon icon={icon} className="md:h-6 md:w-6 h-3 w-3" />
          </div>
          {/* Title */}
          <h3
            className={`text-base font-medium ${
              isFill ? "text-white/80" : "text-muted-foreground"
            }`}
          >
            {title}
          </h3>{" "}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-lg  ${
                isFill
                  ? "bg-white/10 hover:bg-white/40 text-white"
                  : "bg-muted/70 hover:bg-muted text-foreground"
              }`}
            >
              <Icon icon="mdi:dots-horizontal" className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Value and Trend */}
      <div className="flex items-center gap-3">
        <span className={`text-4xl font-semibold ${isFill ? "text-white" : "text-[#25252580]"}`}>{value}</span>

        {trend && trendValue && (
          <div
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
              isPositive
                ? isFill
                  ? "bg-white text-[#0FA726]"
                  : "bg-[#0FA7261A] text-[#0FA726]"
                : isFill
                ? "bg-white text-[#E02424]"
                : "bg-red-100 text-red-700"
            }`}
          >
            <Icon
              icon={isPositive ? "mdi:trending-up" : "mdi:trending-down"}
              className="h-4 w-4"
            />
            {isPositive ? "+" : ""}
            {trendValue}%
          </div>
        )}
      </div>
    </div>
  );
}
