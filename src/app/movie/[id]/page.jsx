import React from 'react'
import { notFound } from 'next/navigation'
import MovieContainers from '@/containers/movie'
import Movies from '@/mocks/movies.json'
import { instance } from '@/server'


const  getMoviesDetail = async (movieId) => {
  const res = await instance.get(`/movie/${movieId}`)

  return res.data
}


const MoviePage = async ({params, searchParams}) => {
  const movieDetail = await getMoviesDetail(params.id)
    
  if(!movieDetail) {
    notFound()
  }

  if(searchParams.error === "true") {
    throw new Error("Error page")
  }
 
  return (
    <MovieContainers movie={movieDetail}/>
  )
}

export default MoviePage