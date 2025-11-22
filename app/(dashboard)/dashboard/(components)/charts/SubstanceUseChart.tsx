"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { day: "Sunday", cannabis: 186, alchohol: 80, cigarette: 50 },
  { day: "Monday", cannabis: 305, alchohol: 200, cigarette: 90 },
  { day: "Tuesday", cannabis: 237, alchohol: 120, cigarette: 70 },
  { day: "Wednesday", cannabis: 73, alchohol: 190, cigarette: 60 },
  { day: "Thursday", cannabis: 209, alchohol: 130, cigarette: 80 },
  { day: "Friday", cannabis: 214, alchohol: 140, cigarette: 100 },
  { day: "Saturday", cannabis: 150, alchohol: 100, cigarette: 70 },
];

const chartConfig = {
  cannabis: {
    label: "cannabis",
    color: "#441890",
  },
  alchohol: {
    label: "alchohol",
    color: "#8467B6",
  },
  cigarette: {
    label: "cigarette",
    color: "#C3B5DB",
  },
} satisfies ChartConfig;

export function SubstanceUseChart() {
  return (
    <div className="p-2 border rounded">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="cannabis" fill="#441890" radius={4} />
            <Bar dataKey="alchohol" fill="#8467B6" radius={4} />
            <Bar dataKey="cigarette" fill="#C3B5DB" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </div>
  );
}
