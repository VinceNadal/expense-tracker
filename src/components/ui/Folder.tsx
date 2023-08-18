import React, { ReactNode } from "react";
import { MoveDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

type FolderItem = {
  id: string;
  children: React.ReactNode
};

type FolderProps = {
  name: string;
  items: FolderItem[],
};

export const Folder = ({ name, items }: FolderProps) => {
  return (
    <Accordion type="multiple" className="w-[350px] space-y-2 rounded-md justify-between border flex items-center space-x-4 px-4" >
      <AccordionItem value={name} className="w-full">
        <AccordionTrigger>{name}</AccordionTrigger>
        {items.map((item) => (
          <AccordionContent key={item.id} className="px-4 py-3 font-mono text-sm">
            {item.children}
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
