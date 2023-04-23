import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: "moviesApi", 
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.themoviedb.org",  
    }),
    endpoints: (builder)=>({
        getAllMovies: builder.query({
            query: ()=>'movie'
        }),
        getMoviesById: builder.query({
            query: (id)=>`3/movie/${id}`
        })
        
    })
});

export const {useGetAllMoviesQuery, useGetMoviesByIdQuery} = movieApi
