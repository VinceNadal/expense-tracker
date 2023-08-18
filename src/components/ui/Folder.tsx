import React, { useState } from "react";
import { MoveDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { Button } from "@/components/ui/Button";

type FolderItem = {
  id: string,
  name: string
}

type FolderProps = {
  name: string;
  items: FolderItem[];
};

export const Folder = ({ name, items }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2 rounded-md border"
    >
      <div className=" flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{name}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <MoveDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {items.map((item) => (
          <div className="rounded-md border px-4 py-3 font-mono text-sm" key={item.id}>
            {item.name}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
