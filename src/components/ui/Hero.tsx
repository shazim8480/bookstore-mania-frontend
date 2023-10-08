import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
          <p className="mb-5">Our Heartiest welcome to Book-store Mania!</p>
          <Link to="/books">
            <button className="btn btn-primary">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
