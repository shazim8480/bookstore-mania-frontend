import { IBook } from "@/types/globalTypes";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  bookItem: IBook;
}

export default function BookCard({ bookItem }: IProps) {
  return (
    <div className="card shadow-md w-60 h-[90%] bg-slate-100">
      <figure>
        <img
          className="object-cover h-[200px] w-[250px]"
          src="https://source.unsplash.com/random?books"
          alt="Books"
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="text-md text-indigo-950 font-bold">{bookItem?.title}</h3>
        <div className="badge badge-accent">{bookItem?.author}</div>
        <p className="mt-2">${bookItem?.price}</p>
        <Link className="w-full" to={`/book-details/${bookItem._id}`}>
          <button className="btn w-full btn-primary mt-1">
            Explore This Book
          </button>
        </Link>
      </div>
    </div>
  );
}
