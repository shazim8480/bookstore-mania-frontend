"use client";

// import * as React from "react";
import React, { useEffect } from "react";

import { Input } from "./ui/Input";

import { useForm } from "react-hook-form";
import { useUpdateBookMutation } from "@/redux/features/books/books-api";
// import { FcGoogle } from "react-icons/fc";

type EditBookFormProps = React.HTMLAttributes<HTMLDivElement> & {
  singleBookData: any;
  id: any;
};

interface EditBookFormInputs {
  title: string;
  author: string;
  price: number;
  publication_date: number;
  genre: string;
  email: string;
}

interface IUpdateBook {
  id: string;
  data: object;
}

export function EditBookForm({
  className,
  singleBookData,
  id,
  ...props
}: EditBookFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditBookFormInputs>();

  console.log("existing book data", singleBookData);

  useEffect(() => {
    if (singleBookData) {
      setValue("title", singleBookData?.title);
      setValue("author", singleBookData?.author);
      setValue("price", singleBookData?.price);
      setValue("genre", singleBookData?.genre);
      setValue("publication_date", singleBookData?.publication_date);
      setValue("email", singleBookData?.email);
    }
  }, [singleBookData, setValue]);

  const [updateBook, { isSuccess }] = useUpdateBookMutation();

  const onSubmit = (bookData: EditBookFormInputs) => {
    // console.log("book-data", bookData);
    const updatedData: IUpdateBook = {
      id: id,
      data: bookData,
    };
    console.log("updated data body to patch", updatedData);

    updateBook(updatedData);

    console.log("isSuccess", isSuccess);
  };

  return (
    <div className="" {...props}>
      {isSuccess && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Book Updated successfully.</span>
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
              defaultValue={singleBookData?.title || ""}
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
              //   value={}
              {...register("author", { required: "Author Name is required" })}
              defaultValue={singleBookData?.author || ""}
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
              defaultValue={singleBookData?.price || ""}
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
              defaultValue={singleBookData?.genre || ""}
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
              defaultValue={singleBookData?.publication_date || ""}
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
              defaultValue={singleBookData?.email || ""}
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
