"use client";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ClientOverviewChart } from "./charts/ClientOverviewChart";
import { CalendarDemo } from "./charts/CalendarDemo";
import { ClientListCard } from "@/components/dashboard/client-list-card";
import dashboardData from "@/lib/dummy-data";
import { TherapistScheduleCard } from "@/components/dashboard/therapist-schedule-card";

export default function PortalTab() {
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
        <CalendarDemo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <ClientListCard
          title="Prospective Clients"
          items={prospectiveClients}
          showStatus={true}
        />

        <TherapistScheduleCard
          title="Therapist's schedule"
          icon="mdi:calendar-outline"
          stats={therapistSchedule.stats}
          items={therapistSchedule.items.slice(0, 3)}
        />

        <ClientListCard
          title="Appointment"
          icon="mdi:calendar-outline"
          items={appointments}
          showTime={true}
        />
      </div>
    </div>
  );
}
