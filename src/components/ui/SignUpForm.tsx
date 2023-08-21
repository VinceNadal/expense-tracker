import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { FormEvent, HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

type SignUpFormProps = {
  onSubmit: SubmitHandler<SignUpFormValues>;
} & HTMLAttributes<HTMLFormElement>;

export type SignUpFormValues = {
  username: string;
  email: string;
  password: string;
};

export const SignUpForm = ({
  onSubmit,
  className,
  ...props
}: SignUpFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpFormValues>();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((state) => !state);
  };

  return (
    <form
      {...props}
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return handleSubmit(onSubmit)(event);
      }}
      className={cn("flex flex-col gap-4 w-[320px] sm:w-[480px]", className)}
    >
      <section className="flex flex-col gap-2">
        <label>Username: </label>
        <input
          {...register("username", { required: true })}
          className={`border rounded p-2 bg-gray-50 focus:outl focus:ring focus:ring-blue-300 focus:outline-none ${errors.username ? "focus:ring-destructive" : ""}`}
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-600">Username is required</p>
        )}
      </section>

      <section className="flex flex-col gap-2">
        <label>Email: </label>
        <input
          type="email"
          {...register("email", { required: true })}
          className={`border rounded p-2 bg-gray-50 focus:outl focus:ring focus:ring-blue-300 focus:outline-none ${errors.email ? "focus:ring-destructive" : ""}`}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-600">Email is required</p>}
      </section>

      <section className="flex flex-col gap-2">
        <label>Password: </label>
        <div className={`flex flex-1 bg-gray-50 border rounded justify-between focus-within:ring ${errors.password ? "focus-within:ring-destructive" : "focus-within:ring-blue-300"}`}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            {...register("password", { required: true, minLength: 8 })}
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
          <p className="text-red-600">
            Password minimum length is 8 characters
          </p>
        )}
      </section>

      <Button type="submit">Submit</Button>
    </form>
  );
};
