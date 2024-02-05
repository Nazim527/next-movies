import React from 'react'
import { notFound } from 'next/navigation'
import MovieContainers from '@/containers/movie'
import Movies from '@/mocks/movies.json'

const MoviePage = ({params, searchParams}) => {
  const movieDetail = Movies.results.find((movie) => movie.id == params.id)
    
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