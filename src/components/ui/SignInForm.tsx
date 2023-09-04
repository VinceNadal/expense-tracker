import { Button, ButtonProps } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { HTMLAttributes, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInFormValues = {
  usernameOrEmail: string;
  password: string;
};

type SignInFormProps = {
  onSignIn: SubmitHandler<SignInFormValues>;
  buttonProps?: ButtonProps
} & HTMLAttributes<HTMLFormElement>;

export const SignInForm = ({ onSignIn, className, buttonProps, ...props }: SignInFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormValues>();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((state) => !state);
  };

  return (
    <form
      {...props}
      className={cn("flex flex-col gap-4 w-[320px] sm:w-[480px]", className)}
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(onSignIn)(event);
      }}
    >
      <section className="flex justify-center items-center p-2">
        <h3 className="text-3xl">Sign In</h3>
      </section>
      <section className="flex flex-col gap-2">
        <label>Username/Email: </label>
        <input
          {...register("usernameOrEmail", { required: true })}
          className={`border rounded p-2 bg-gray-50 focus:outl focus:ring focus:ring-blue-300 focus:outline-none ${
            errors.usernameOrEmail ? "focus:ring-destructive" : ""
          }`}
          placeholder="Username or Email"
        />
        {errors.usernameOrEmail && (
          <p className="text-red-600">Username/Email is required</p>
        )}
      </section>
      <section className="flex flex-col gap-2">
        <label>Password: </label>
        <div
          className={`flex flex-1 bg-gray-50 border rounded justify-between focus-within:ring ${
            errors.password
              ? "focus-within:ring-destructive"
              : "focus-within:ring-blue-300"
          }`}
        >
          <input
            type={isPasswordVisible ? "text" : "password"}
            {...register("password", { required: true })}
            className="p-2 bg-gray-50 focus:outline-none"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="flex flex-col justify-center items-center p-1"
          >
            {isPasswordVisible ? (
              <EyeOff size={16} color="#000000" />
            ) : (
              <Eye size={16} color="#000000" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-600">Password is required</p>
        )}
      </section>
      <Button {...buttonProps}>Sign In</Button>
    </form>
  );
};
