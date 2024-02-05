import FeaturedMovie from '@/components/featured-movies'
import React from 'react'

const MovieContainers = ({movie}) => {
  return (
    <FeaturedMovie movie={movie} isCompact={false}/>
  )
}

export default MovieContainers