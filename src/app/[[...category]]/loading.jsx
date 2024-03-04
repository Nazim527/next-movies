import CategoriesLoading from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featured-movies/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";
import React from "react";

const Loading = () => {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </div>
  );
};

export default Loading;
