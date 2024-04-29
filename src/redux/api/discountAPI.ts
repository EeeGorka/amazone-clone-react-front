import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import IDiscount from "../../interfaces/IDiscount";
import ICategoryImage from "../../interfaces/ICategoryImage";

export const discountAPI = createApi({
    reducerPath: "discountAPI",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8081/discount"}),
    tagTypes: ['Discount'],
    endpoints: (build) => ({
        fetchAll: build.query<IDiscount[], void>({
            query: () => ({
                url: "/all"
            }),
            providesTags: ['Discount']
        }),
        fetchById: build.query<IDiscount, number>({
            query: (id: number) => ({
                url: "",
                params: {id: id}
            }),
            providesTags: ['Discount']
        }),
        add: build.mutation<void, IDiscount>({
            query: (discount: IDiscount) =>  ({
                url: "",
                method: "POST",
                body: discount
            }),
            invalidatesTags: ['Discount']
        }),
        delete: build.mutation<void, number>({
            query: (id: number) => ({
                url: "",
                method: "DELETE",
                params: {id: id}
            }),
            invalidatesTags: ['Discount']
        })
    })
})