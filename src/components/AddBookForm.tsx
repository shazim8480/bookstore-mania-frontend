"use client";

import * as React from "react";

import Input from "./ui/Input";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAddBookMutation } from "@/redux/features/books/books-api";
import { IBook } from "@/types/globalTypes";
// import { FcGoogle } from "react-icons/fc";

type AddBookFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AddBookFormInputs {
  title: string;
  author: string;
  price: number;
  publication_year: number;
  genre: string;
  email: string;
}

export function AddBookForm({ className, ...props }: AddBookFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBookFormInputs>();

  //   const data:IBook = {

  //   }
  //   const { addBook } = useAddBookMutation(data);

  const onSubmit = (data: AddBookFormInputs) => {
    console.log(data);
  };

  return (
    <div className="" {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-3 gap-2">
          <div className="grid gap-1">
            <Input
              label="Book Title"
              id={"title"}
              autoCapitalize={"none"}
              autoCorrect={"off"}
              {...register("title", { required: "Book Title is required" })}
            />
            {errors.title && (
              <p className="text-sm text-red-500 ml-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Input
              label="Author"
              id={"author"}
              autoCapitalize={"none"}
              autoCorrect={"off"}
              {...register("author", { required: "Author Name is required" })}
            />
            {errors.author && (
              <p className="text-sm text-red-500 ml-1">
                {errors.author.message}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Input
              label="Price ($)"
              id={"price"}
              autoCapitalize={"none"}
              autoCorrect={"off"}
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && (
              <p className="text-sm text-red-500 ml-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Input
              label="Genre"
              id={"genre"}
              autoCapitalize={"none"}
              autoCorrect={"off"}
              {...register("genre", { required: "Genre is required" })}
            />
            {errors.genre && (
              <p className="text-sm text-red-500 ml-1">
                {errors.genre.message}
              </p>
            )}
          </div>

          <div className="grid gap-1">
            <Input
              label="Publication Year"
              id={"publication_year"}
              autoCapitalize={"none"}
              autoCorrect={"off"}
              {...register("publication_year", {
                required: "Publication Year is required",
              })}
            />
            {errors.publication_year && (
              <p className="text-sm text-red-500 ml-1">
                {errors.publication_year.message}
              </p>
            )}
          </div>

          <div className="grid gap-1">
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
          <button type="submit" className="btn btn-secondary mt-3">
            Submit Book
          </button>
        </div>
      </form>
    </div>
  );
}
