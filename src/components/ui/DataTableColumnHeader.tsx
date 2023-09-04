import { Column } from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ChevronUp, EyeOff } from "lucide-react";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }
  return (
    <Button
      variant="ghost"
      onClick={column.getToggleSortingHandler()}
      className={cn("space-x-1 px-0 w-full justify-normal", className)}
    >
      <span>{title}</span>
      <div className="flex flex-col">
        <ChevronUp className="h-4 w-4 text-blue-600" />
        <ChevronDown className="h-4 w-4 text-blue-600" />
      </div>
    </Button>
  );
}
