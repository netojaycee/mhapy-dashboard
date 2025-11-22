"use client";

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", total: 186, active: 80, prospective: 70 },
  { month: "February", total: 305, active: 200, prospective: 20 },
  { month: "March", total: 237, active: 120, prospective: 0 },
  { month: "April", total: 73, active: 190, prospective: 50 },
  { month: "May", total: 209, active: 130, prospective: 0 },
  { month: "June", total: 214, active: 140, prospective: 90 },
];

const chartConfig = {
  total: {
    label: "Total",
    // color: "var(--chart-1)",
    color: "#441890",
  },
  active: {
    label: "Active",
    // color: "var(--chart-2)",
    color: "#8467B6",
  },
  prospective: {
    label: "Prospective",
    // color: "var(--chart-3)",
    color: "#C3B5DB",
  },
} satisfies ChartConfig;

// #C3B5DB
// #8467B6
// #441890

export function ClientOverviewChart() {
  const [timeRange, setTimeRange] = useState("this-year");

  return (
    <div className="border rounded p-2">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Icon icon="mdi:account-multiple" />
            Client Overview
          </h3>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="h-3 w-3 rounded-full bg-primary"></span>
              <span className="text-muted-foreground">Total clients</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-3 w-3 rounded-full bg-[#8467B6]"></span>
              <span className="text-muted-foreground">Active clients</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="h-3 w-3 rounded-full bg-[#C3B5DB]"></span>
              <span className="text-muted-foreground">Prospective clients</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="md:w-40 shadow-none rounded">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-quarter">This Quarter</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <ChartContainer className="" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <Bar
              dataKey="total"
              stackId="a"
              fill="var(--color-total)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="active"
              stackId="a"
              fill="var(--color-active)"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="prospective"
              stackId="a"
              fill="var(--color-prospective)"
              radius={[4, 4, 0,0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
