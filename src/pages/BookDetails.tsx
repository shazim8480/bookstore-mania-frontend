import React from "react";

export default function BookDetails() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* Book name */}
            <h2 className="text-gray-700 text-3xl title-font font-medium mb-1">
              {"Book Name"}
            </h2>
            <div className="mb-4">
              <h3 className="text-indigo-500 pt-2">Published : 2020</h3>
              <h3 className="text-indigo-500 pt-2">Author : 2020</h3>
              <h3 className="text-indigo-500 pt-2">Genre : 2020</h3>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-10">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              {/* EDIT btn */}
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Edit Book
              </button>
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
