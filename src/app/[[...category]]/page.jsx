import HomeContainer from "@/containers/Home";
import Link from "next/link";
import Movies from "@/mocks/movies.json";
import { instance } from "@/server";
import { getCategories, getFavorites, getPopulars, getSingleCategory } from "@/server/movie";



async function Home({ params }) {

  const [
    { results: AllPopularMovies },
    { results: AllFavoritesMovies },
    { genres: Allcategories },
  ] = await Promise.all([
    getPopulars(),
    getFavorites(),
    getCategories(),
  ]);

  let selectedCategory;

  if (params.category?.length > 0) {
    const {results} = await getSingleCategory(params?.category[0]);

    selectedCategory = results
  }
  return (
    <HomeContainer
      categories={Allcategories}
      popularMovies={AllPopularMovies}
      favoritesMovies={AllFavoritesMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 7) : [],
      }}
    />
  );
}

export default Home;
