import { useSingleBookQuery } from "@/redux/features/books/books-api";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const { data: singleBookData, isLoading } = useSingleBookQuery(id);
  console.log(
    "🚀 ~ file: BookDetails.tsx:8 ~ BookDetails ~ singleBookData:",
    singleBookData
  );

  // useEffect((): any => {
  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  // }, [singleBookData]);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="book"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://source.unsplash.com/random?books"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Book name */}
            <h2 className="text-gray-700 text-3xl font-bold title-font mb-4">
              {singleBookData?.title}
            </h2>
            <div className="mb-4">
              <h3 className="text-indigo-500 pt-2">
                Published : {singleBookData?.publication_date}
              </h3>
              <h3 className="text-indigo-500 pt-2">
                Author : {singleBookData?.author}
              </h3>
              <h3 className="text-indigo-500 pt-2">
                Genre : {singleBookData?.genre}
              </h3>
            </div>
            <div className="flex mt-10">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${singleBookData?.price}.00
              </span>
              {/* EDIT btn */}
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Edit Book
              </button>
              {/* DLT Button */}
              <button className="flex ml-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
