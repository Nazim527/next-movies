import React from "react";

import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json"

import FeaturedMovie from "@/components/featured-movies";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";
const HomeContainer = () => {
  return (
    <>
      <FeaturedMovie movie={Movies.results[14]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
      <MoviesSection title={"Popular Films"} movies={Movies.results.slice(1,9)}/>
      <MoviesSection title={"Popular Films"} movies={Movies.results.slice(8,15)}/>
    </>
  );
};

export default HomeContainer;
