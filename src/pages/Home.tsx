import BookCard from "@/components/Book-card";
import Hero from "@/components/ui/Hero";
import { useGetBooksQuery } from "@/redux/features/books/books-api";
import { IBook } from "@/types/globalTypes";

export default function Home() {
  const { data: allBooksData, isLoading } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log("🚀 ~ file: Home.tsx:8 ~ Home ~ allBooksData:", allBooksData);

  const latestBooks = allBooksData?.data.slice(-10).reverse();
  console.log("latest added data", latestBooks);

  return (
    <>
      <Hero />
      <div className="px-5 py-10 bg-indigo-50">
        <h2 className="mb-16 text-4xl text-center text-indigo-800 font-bold">
          Featured Collections
        </h2>

        {isLoading ? (
          <p className="flex flex-col justify-center items-center text-lg text-indigo-600 text-center">
            Loading...
          </p>
        ) : (
          <div className="grid grid-cols-5 gap-2 place-items-center items-center">
            {latestBooks?.map((bookItem: IBook, index: number) => {
              return <BookCard key={index} bookItem={bookItem} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
