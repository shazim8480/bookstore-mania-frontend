import BookCard from "@/components/Book-card";
import { useGetBooksQuery } from "@/redux/features/books/books-api";
import { IBook } from "@/types/globalTypes";
import React from "react";

export default function Books() {
  const { data: allBooksData } = useGetBooksQuery(undefined);
  return (
    <div className="grid grid-cols-4 gap-4 py-10 px-5">
      {allBooksData?.data?.map((bookItem: IBook, index: number) => {
        return <BookCard key={index} bookItem={bookItem} />;
      })}
    </div>
  );
}
