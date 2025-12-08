"use client";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ClientOverviewChart } from "./charts/ClientOverviewChart";
import { CalendarDemo } from "./charts/CalendarDemo";
import { ClientListCard } from "@/components/dashboard/client-list-card";
import dashboardData from "@/lib/dummy-data";
import { TherapistScheduleCard } from "@/components/dashboard/therapist-schedule-card";
import { MoodReportChart } from "./charts/MoodReportChart";
import { SubstanceUseChart } from "./charts/SubstanceUseChart";
import { SleepQualityChart } from "./charts/SleepQualityChart";

export default function HealthProfileTab() {
  const { prospectiveClients, appointments, therapistSchedule } = dashboardData;
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <StatsCard
          icon="mdi:account-multiple"
          title="Total clients"
          value={448}
          trend="positive"
          trendValue="1.74"
          variant="fill"
        />

        <StatsCard
          icon="mdi:account-multiple"
          title="Active clients"
          value={223}
          trend="negative"
          trendValue="0.32"
          variant="outline"
        />
        <StatsCard
          icon="mdi:account-multiple"
          title="Active clients"
          value={223}
          trend="negative"
          trendValue="0.32"
          variant="outline"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
        <ClientOverviewChart />
        <MoodReportChart />{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-2">
        <SubstanceUseChart />
        <SleepQualityChart />
      </div>
    </div>
  );
}
