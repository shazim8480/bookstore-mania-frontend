import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "@/redux/features/books/books-api";
import { useEffect, useState } from "react";
// import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const { data: singleBookData } = useSingleBookQuery(id);
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  const navigate = useNavigate();

  useEffect((): any => {
    setTimeout(() => {
      if (isSuccess) {
        navigate("/");
      }
    }, 1200);
  }, [singleBookData, deleteBook, isSuccess]);

  const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
  // console.log(
  //   "🚀 ~ file: BookDetails.tsx:21 ~ BookDetails ~ deleteModalVisible:",
  //   deleteModalVisible
  // );

  const handleDeleteBook = (id: string | undefined) => {
    deleteBook(id);
    // setDeleteModalVisible(false);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {isSuccess && (
        <div className="toast toast-end">
          <div className="alert alert-error">
            <span>Book Removed successfully.</span>
          </div>
        </div>
      )}
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="book"
            className="lg:w-1/2 w-full lg:h-auto h-32 object-cover object-center rounded"
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
            <div className="my-10">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${singleBookData?.price}.00
              </span>
            </div>
            <div className="flex">
              {/* EDIT btn */}
              <Link to={`/edit-book/${id}`}>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Edit Book
                </button>
              </Link>

              {/* DLT Button */}
              <button
                onClick={() => {
                  // setDeleteModalVisible(true);
                  handleDeleteBook(id);
                }}
                className="flex ml-5 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal for delete confirmation */}
      {deleteModalVisible && (
        <div className="modal" id="my_modal_8">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Caution</h3>
            <p className="py-4">
              Are you sure want to delete this book from the list?
            </p>
            <div className="modal-action">
              <button
                onClick={() => handleDeleteBook(id)}
                className="btn btn-outline btn-accent"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
