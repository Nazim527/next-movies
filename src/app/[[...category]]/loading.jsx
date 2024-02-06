import CategoriesLoading from '@/components/categories/loading'
import FeatureMovieLoading  from '@/components/featured-movies/loading'
import React from 'react'

const Loading = () => {
  return (
    <div>
        <FeatureMovieLoading/>
        <CategoriesLoading/>
    </div>
  )
}

export default Loading