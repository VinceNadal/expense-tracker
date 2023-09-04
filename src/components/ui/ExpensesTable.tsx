import React, { FormEvent, useState } from "react";
import { DataTable } from "@/components/ui/DataTable";

import { Button } from "@/components/ui/Button";
import { Trash2 } from "lucide-react";
import { InternationalCurrencyCode } from "@/lib/currency";
import { expensesTableColumns } from "@/components/ui/ExpensesTableColumns";
import { SaveExpenseItemDialog } from "@/components/ui/SaveExpenseItemDialog";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export type Expense = {
  id: string;
  name: string;
  amount: number;
  quantity: number;
};

type Props = {
  expenseList: Expense[];
  currencyFormat?: InternationalCurrencyCode;
  enableRowSelection?: boolean;
};

const newExpenseItem: Expense = {
  id: "",
  amount: 0,
  name: "",
  quantity: 1,
};

export const ExpensesTable = ({
  expenseList,
  currencyFormat = "USD",
  enableRowSelection = false,
}: Props) => {
  const [openSaveDialog, setOpenSaveDialog] = useState(false);
  const [itemToSave, setItemToSave] = useState<Expense>(newExpenseItem);

  const toggleOpenSaveDialog = () => {
    setOpenSaveDialog((previousState) => !previousState);
  };

  const setExpenseItemToSave = (expenseItem: Expense) => {
    setItemToSave(expenseItem);
  };

  const onItemEdit = (expenseItem: Expense) => {
    setExpenseItemToSave(expenseItem);
    toggleOpenSaveDialog();
    reset(expenseItem);
  };

  const onExpenseItemSave: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  };

  const onExpenseItemSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(onExpenseItemSave)(event);
    toggleOpenSaveDialog();
    setExpenseItemToSave(newExpenseItem)
    reset(newExpenseItem);
  };

  const handleAddExpenseItem = () => {
    setExpenseItemToSave(newExpenseItem);
    reset(newExpenseItem);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({ defaultValues: itemToSave });

  return (
    <div className="space-y-4">
      <Button variant="destructive" disabled>
        <Trash2 />
        <span>Delete</span>
      </Button>
      <DataTable
        columns={expensesTableColumns(currencyFormat, onItemEdit)}
        data={expenseList}
        enableRowSelection={enableRowSelection}
      />
      <SaveExpenseItemDialog
        onAddExpenseItem={handleAddExpenseItem}
        onOpenChange={toggleOpenSaveDialog}
        open={openSaveDialog}
        errors={errors}
        onSubmit={onExpenseItemSubmit}
        register={register}
        triggerName="Add Expense Item"
      />
    </div>
  );
};
