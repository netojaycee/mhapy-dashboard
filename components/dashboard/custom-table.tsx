"use client"

import { useState, useMemo } from "react"
import { Icon } from "@iconify/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface ColumnDef<TData> {
  id: string
  header: string | React.ReactNode
  accessorKey?: string
  cell?: (data: TData) => React.ReactNode
  width?: string
  sortable?: boolean
}

interface CustomTableProps<TData> {
  columns: ColumnDef<TData>[]
  data: TData[]
  title?: string
  showTitle?: boolean
  showSearch?: boolean
  searchPlaceholder?: string
  searchKey?: string
  showPagination?: boolean
  pageSize?: number
  onRowClick?: (row: TData) => void
  emptyMessage?: string
}

export function CustomTable<TData extends Record<string, any>>({
  columns,
  data,
  title = "Table",
  showTitle = false,
  showSearch = false,
  searchPlaceholder = "Search...",
  searchKey,
  showPagination = false,
  pageSize = 10,
  onRowClick,
  emptyMessage = "No data available",
}: CustomTableProps<TData>) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(pageSize)

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!showSearch || !searchTerm || !searchKey) {
      return data
    }

    return data.filter((item) => {
      const searchValue = item[searchKey]?.toString().toLowerCase() || ""
      return searchValue.includes(searchTerm.toLowerCase())
    })
  }, [data, searchTerm, searchKey, showSearch])

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = showPagination
    ? filteredData.slice(startIndex, startIndex + itemsPerPage)
    : filteredData

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const getCellValue = (row: TData, column: ColumnDef<TData>) => {
    if (column.cell) {
      return column.cell(row)
    }

    if (column.accessorKey) {
      return row[column.accessorKey]
    }

    return null
  }

  return (
    <div className="border border-border rounded bg-card p-2 space-y-2">
      {/* Title and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {showTitle && (
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        )}

        {showSearch && (
          <div className="flex gap-2 flex-1 sm:flex-none">
            <div className="relative flex-1 sm:flex-none sm:w-64">
              <Input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="pr-10 bg-muted border-0"
              />
              <Icon
                icon="mdi:magnify"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4"
              />
            </div>

            <Button variant="outline" size="icon">
              <Icon icon="mdi:tune" className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className={`text-foreground font-semibold ${column.width || ""}`}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && (
                      <Icon icon="mdi:arrow-up-down" className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </TableHead>
              ))}
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={`${rowIndex}-${column.id}`}
                      className={`text-foreground ${column.width || ""}`}
                    >
                      {getCellValue(row, column)}
                    </TableCell>
                  ))}
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Icon icon="mdi:dots-vertical" className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 1}
                  className="text-center py-8 text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
            {filteredData.length} results
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Per page:</span>
              <Select
                value={itemsPerPage.toString()}
                onValueChange={(value) => {
                  setItemsPerPage(Number(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                <Icon icon="mdi:chevron-left" className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <Icon icon="mdi:chevron-right" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
