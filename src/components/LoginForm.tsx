"use client";

import * as React from "react";

import { Input } from "./ui/Input";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginUser } from "@/redux/features/user/userSlice";
// import { FcGoogle } from "react-icons/fc";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function LoginForm({ ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useAppSelector((state) => state.user);

  // submit user data for email
  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);

    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading, navigate]);

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
              label="Password"
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
            Login with Email
          </button>
        </div>
      </form>
    </div>
  );
}
