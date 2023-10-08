import { IBook } from "@/types/globalTypes";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  bookItem: IBook;
}

export default function BookCard({ bookItem }: IProps) {
  return (
    <div className="card shadow-md w-80 bg-slate-100">
      <figure>
        <img
          className="object-cover h-[300px] w-[350px]"
          src="https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Books"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{bookItem?.title}</h3>
        <div className="badge badge-accent">{bookItem?.author}</div>
        <p>${bookItem?.price}</p>
        <button className="btn btn-primary mt-3">
          <Link to="/book-details">Explore Now</Link>
        </button>
      </div>
    </div>
  );
}
