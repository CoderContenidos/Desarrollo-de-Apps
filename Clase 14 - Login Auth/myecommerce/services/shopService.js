import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

// Define a service using a base URL and expected endpoints
export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProductsbyCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        getCategories: builder.query({
            query: () => `categories.json`,
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
              url: 'orders.json',
              method: 'POST',
              body: order
            })
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsbyCategoryQuery, useGetCategoriesQuery, usePostOrderMutation } = shopApi;
