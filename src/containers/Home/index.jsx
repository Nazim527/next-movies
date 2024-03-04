import React from "react";

import FeaturedMovie from "@/components/featured-movies";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({ categories = [],favoritesMovies = [],popularMovies = [],selectedCategory }) => {
  return (
    <>
      <FeaturedMovie movie={favoritesMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {selectedCategory?.movies.length > 0 && (
        <MoviesSection
          title={categories.find((genre) => genre.id == selectedCategory.id)?.name}
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection
        title={"Popular Films"}
        movies={popularMovies.slice(1, 9)}
      />
      <MoviesSection
        title={"IMDB High Films"}
        movies={favoritesMovies.slice(8, 15)}
      />
    </>
  );
};

export default HomeContainer;
