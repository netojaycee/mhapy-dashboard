"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { mood: "sad", frequency: 275, fill: "#62B2FD" },
  { mood: "happy", frequency: 200, fill: "#9BDFC4" },
  { mood: "depressed", frequency: 287, fill: "#F99BAB" },
];

const chartConfig = {
  frequency: {
    label: "frequency",
  },
  chrome: {
    label: "Sad",
    color: "#62B2FD",
  },
  safari: {
    label: "Happy",
    color: "#9BDFC4",
  },
  firefox: {
    label: "Depressed",
    color: "#F99BAB",
  },
} satisfies ChartConfig;

export function MoodReportChart() {
  const totalfrequency = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.frequency, 0);
  }, []);

  return (
    <div className="flex flex-col border p-2 rounded">
      <div className="items-center pb-0">
        <div>Pie Chart - Donut with Text</div>
        <div>January - June 2024</div>
      </div>
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="frequency"
              nameKey="mood"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalfrequency.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Active Clients
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
