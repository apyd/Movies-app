import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://localhost:4000/';

export const apiSlice = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/movies`,
      providesTags: ['Movies'],
    }),
    getMovieById: builder.query<Movie, number>({
      query: (id) => `/movies/${id}`,
    }),
    addMovie: builder.mutation<Movie, Movie>({
      query: (movie) => ({
        url: `/movies`,
        method: 'POST',
        body: movie,
      }),
      invalidatesTags: ['Movies'],
    }),
    updateMovieById: builder.mutation({
      query: (movie) => ({
        url: `/movies/${movie.id}`,
        method: 'PUT',
        body: movie,
      }),
      invalidatesTags: ['Movies'],
    }),
    deleteMovieById: builder.mutation({
      query: (id) => ({
        url: `/movies`,
        method: 'DELETE',
        body: { id: id },
      }),
      invalidatesTags: ['Movies'],
    }),
  }),
})

export const { useGetMoviesQuery, useGetMovieByIdQuery, useAddMovieMutation, useUpdateMovieByIdMutation, useDeleteMovieByIdMutation } = apiSlice