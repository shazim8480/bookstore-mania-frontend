import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/add-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update-book/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    // postReview: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/comment/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["reviews"],
    // }),
    // getReviews: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: [""],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
} = bookApi;
