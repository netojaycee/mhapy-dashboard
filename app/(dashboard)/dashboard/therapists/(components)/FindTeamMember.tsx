import { CustomTable, ColumnDef } from "@/components/dashboard/custom-table";
import { clientsTableData, ClientTableRow } from "@/lib/dummy-clients-table";
import React from "react";
import Image from "next/image";

const columns: ColumnDef<ClientTableRow>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    cell: (row) => (
      <div className="flex items-center gap-3">
        <Image
          src={row.avatar}
          alt={row.name}
          width={36}
          height={36}
          className="rounded-full"
          unoptimized
        />
        <div>
          <p className="font-medium text-foreground">{row.name}</p>
          <p className="text-sm text-muted-foreground">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    id: "role",
    header: "Role",
    accessorKey: "role",
    cell: (row) => <span className="text-foreground">{row.role}</span>,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: (row) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          row.status === "Active"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  {
    id: "lastSeen",
    header: "Last Seen",
    accessorKey: "lastSeen",
    cell: (row) => (
      <div className="text-sm">
        <p className="text-foreground">{row.lastSeen}</p>
        <p className="text-muted-foreground">{row.lastSeenTime}</p>
      </div>
    ),
  },
];

export default function FindTeamMember() {
  return (
    <div>
      <CustomTable
        columns={columns}
        data={clientsTableData}
        title="All Clients"
        showTitle={true}
        showSearch={true}
        searchPlaceholder="Search client"
        searchKey="name"
        showPagination={true}
        pageSize={10}
      />
    </div>
  );
}
