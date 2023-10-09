"use client";

import * as React from "react";

import { Input } from "./ui/Input";

import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import { createUser } from "@/redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
}

export function SignUpForm({ ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // submit user data for email
  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);

    dispatch(createUser({ email: data.email, password: data.password }));

    navigate("/");
  };

  //   useEffect(() => {
  //     if (user.email && !isLoading) {
  //       navigate("/");
  //     }
  //   }, [user.email, isLoading, navigate]);

  return (
    <div className="" {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <Input
              label="Email"
              id={"email"}
              placeholder="name@example.com"
              type={"email"}
              autoCapitalize="none"
              autoComplete={"email"}
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
