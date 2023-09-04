import { InternationalCurrencyCode } from "@/lib/currency";
import { ColumnDef } from "@tanstack/react-table";
import { Expense } from "@/components/ui/ExpensesTable";
import { Button } from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/DropdownMenu";
import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  PenSquare,
  Trash2,
} from "lucide-react";
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader";

export const expensesTableColumns = (
  currencyFormat: InternationalCurrencyCode,
  onEdit: (expenseItem: Expense) => void
): ColumnDef<Expense>[] => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Name" />;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const currency = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: currencyFormat,
      });
      const formattedValue = currency.format(row.getValue<number>("amount"));
      return <div className="font-medium text-right">{formattedValue}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
  },
  {
    accessorKey: "total",
    accessorFn: (row) => row.amount * row.quantity,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="space-x-1 px-0 w-full justify-normal"
        >
          <span>Total</span>
          <div className="flex flex-col">
            <ChevronUp className="h-4 w-4 text-blue-600" />
            <ChevronDown className="h-4 w-4 text-blue-600" />
          </div>
        </Button>
      );
    },

    cell: ({ row }) => {
      const currency = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: currencyFormat,
      });
      const formattedValue = currency.format(
        row.getValue<number>("amount") * row.getValue<number>("quantity")
      );
      return <div className="font-medium text-right">{formattedValue}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className="flex gap-4 cursor-pointer"
              onClick={() => onEdit(row.original)}
            >
              <PenSquare />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-4 cursor-pointer text-destructive focus:text-destructive">
              <Trash2 />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
