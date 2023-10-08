import BookCard from "@/components/Book-card";
import Hero from "@/components/ui/Hero";
import { useGetBooksQuery } from "@/redux/features/books/books-api";
import { IBook } from "@/types/globalTypes";

export default function Home() {
  const { data: allBooksData } = useGetBooksQuery(undefined);
  console.log("🚀 ~ file: Home.tsx:8 ~ Home ~ allBooksData:", allBooksData);
  return (
    <>
      <Hero />
      <div className="px-5 py-10 bg-indigo-50">
        <h2 className="mb-10 text-4xl text-center text-indigo-800 font-bold">
          Featured Collections
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {allBooksData?.data?.map((bookItem: IBook, index: number) => {
            return <BookCard key={index} bookItem={bookItem} />;
          })}
        </div>
      </div>
    </>
  );
}
