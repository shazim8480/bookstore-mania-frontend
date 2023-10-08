import React from "react";
import { Link } from "react-router-dom";

export default function BookCard() {
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
        <h3 className="card-title">
          The Song of Ice and Fire
          <div className="badge badge-accent">NEW</div>
        </h3>
        <p>$85.00</p>
        <button className="btn btn-primary mt-3">
          <Link to="/book-details">Explore Now</Link>
        </button>
      </div>
    </div>
  );
}
