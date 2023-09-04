import * as React from "react";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions;
  label: string;
  labelClassName?: string;
  id: string;
}

export const Input = ({
  className,
  type,
  register,
  label,
  registerOptions,
  labelClassName,
  id,
  ...props
}: InputProps) => {
  return (
    <>
      <label htmlFor={id} className={cn("bg-background", labelClassName)}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...register(id, registerOptions)}
        {...props}
      />
    </>
  );
};
Input.displayName = "Input";
