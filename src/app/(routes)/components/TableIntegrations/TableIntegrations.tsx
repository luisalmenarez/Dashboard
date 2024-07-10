'use client';

import { ChevronUp } from 'lucide-react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatPrice } from '@/lib/formatPrice';
import Image from 'next/image';
import { TableIntegrationsProps } from './TableIntegrations.types';
import { dataTableIntegrations as data } from './TableIntegrations.data';

// const data: TableIntegrationsProps[] = [
//   {
//     app: 'Stripe',
//     icon: '/images/stripe.png',
//     type: 'Finance',
//     rate: 60,
//     profit: 450000,
//   },
//   {
//     app: 'Zapier',
//     icon: '/images/zapier.png',
//     type: 'CRM',
//     rate: 20,
//     profit: 123500,
//   },
//   {
//     app: 'Shopify',
//     icon: '/images/shopify.png',
//     type: 'Marketplace',
//     rate: 80,
//     profit: 879890,
//   },
// ];

export const columns: ColumnDef<TableIntegrationsProps>[] = [
  {
    accessorKey: 'icon',
    header: 'ICON',
    cell: ({ row }) => (
      <div className="capitalize">
        <Image src={row.getValue('icon')} alt="Logo" width={30} height={30} />
      </div>
    ),
  },
  {
    accessorKey: 'app',
    header: 'APPLICATION',
    cell: ({ row }) => <div className="capitalize">{row.getValue('app')}</div>,
  },
  {
    accessorKey: 'type',
    header: () => <div>TYPE</div>,
    cell: ({ row }) => <div className="capitalize">{row.getValue('type')}</div>,
  },
  {
    accessorKey: 'rate',
    header: () => <div>RATE</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium flex gap-1 items-center">
        <Progress value={row.getValue('rate')} className="h-2" />
      </div>
    ),
  },
  {
    accessorKey: 'profit',
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="float-end px-0"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        PROFIT
        <ChevronUp className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('profit'));

      return (
        <div className="text-right font-medium">{formatPrice(amount)}</div>
      );
    },
  },
];

export const TableIntegrations = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <article className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar empresas..."
          value={(table.getColumn('app')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('app')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </article>
  );
};
