import { EditBookForm } from "@/components/EditBookForm";
import { useSingleBookQuery } from "@/redux/features/books/books-api";

import { useParams } from "react-router-dom";

export default function EditBook() {
  const { id } = useParams();
  const { data: singleBookData } = useSingleBookQuery(id);

  if (!singleBookData) {
    // Handle the loading state or show an error message
    return <p>Loading...</p>;
  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Welcome! Want to edit your published book?
          </h3>
        </div>
        {/*  edit-book form */}
        <EditBookForm id={id} singleBookData={singleBookData} />
      </div>
    </section>
  );
}
