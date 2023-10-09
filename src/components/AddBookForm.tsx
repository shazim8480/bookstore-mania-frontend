"use client";

import * as React from "react";

import { Input } from "./ui/Input";

import { useForm } from "react-hook-form";
import { useAddBookMutation } from "@/redux/features/books/books-api";
// import { useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

type AddBookFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AddBookFormInputs {
  title: string;
  author: string;
  price: number;
  publication_date: number;
  genre: string;
  email: string;
}

export function AddBookForm({ ...props }: AddBookFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddBookFormInputs>();

  //   const navigate = useNavigate();

  const [addBook, { isSuccess }] = useAddBookMutation();

  const onSubmit = (bookData: AddBookFormInputs) => {
    // console.log("book-data", bookData);

    addBook(bookData);

    // setTimeout(() => {
    // if (isSuccess) {
    //   navigate("/");
    // }
    // }, 800);

    // console.log("isSuccess", isSuccess);
  };

  return (
    <div className="" {...props}>
      {isSuccess && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Book Added successfully.</span>
          </div>
        </div>
      )}
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
              label="Publication Date"
              id={"publication_date"}
              autoCapitalize={"none"}
              autoCorrect={"off"}
              {...register("publication_date", {
                required: "Publication Year is required",
              })}
            />
            {errors.publication_date && (
              <p className="text-sm text-red-500 ml-1">
                {errors.publication_date.message}
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
        </div>
        <div className="flex justify-center mt-20">
          <button type="submit" className="btn btn-success w-1/3">
            Submit Book
          </button>
        </div>
      </form>
    </div>
  );
}
