import React, { useEffect, useMemo } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "./Input";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  UseFormReset,
  useForm,
} from "react-hook-form";
import { Expense } from "@/components/ui/ExpensesTable";

type SaveExpenseItemDialogProps = {
  open: boolean;
  onOpenChange: () => void;
  errors: FieldErrors<FieldValues>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<FieldValues>;
  onAddExpenseItem: () => void;
  triggerName: string;
};

export const SaveExpenseItemDialog = ({
  open,
  onOpenChange,
  errors,
  onSubmit,
  register,
  onAddExpenseItem,
  triggerName,
}: SaveExpenseItemDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild onClick={onAddExpenseItem}>
        <Button>{triggerName}</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Save Expense Item</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <section className="space-y-2">
            <Input
              id="name"
              label="Name"
              register={register}
              registerOptions={{ required: "Name is required" }}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message?.toString()}</p>
            )}
          </section>
          <section className="space-y-2">
            <Input
              id="amount"
              label="Amount"
              register={register}
              registerOptions={{
                required: "Amount is required",
                min: {
                  value: 0.01,
                  message: "Amount must be greater than 0",
                },
              }}
              type="number"
              min={0.01}
              step={0.01}
            />
            {errors.amount && (
              <p className="text-red-600">
                {errors.amount?.message?.toString()}
              </p>
            )}
          </section>
          <section className="space-y-2">
            <Input
              id="quantity"
              label="Quantity"
              register={register}
              registerOptions={{
                required: "Quantity is required",
                min: 1,
              }}
              type="number"
              min={1}
            />
            {errors.quantity && (
              <p className="text-red-600">
                {errors.quantity?.message?.toString()}
              </p>
            )}
          </section>
          <Button>Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
