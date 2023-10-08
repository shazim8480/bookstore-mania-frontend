import BookCard from "@/components/Book-card";
import Hero from "@/components/ui/Hero";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-5 my-10">
        <h2 className="mb-8 text-3xl text-center text-indigo-800">
          Featured Collections
        </h2>
        <BookCard />
      </div>
    </>
  );
}
