import HomeContainer from "@/containers/Home";
import Link from "next/link";
import Movies from "@/mocks/movies.json";
import { instance } from "@/server";


const  getSingleCategory = async (genreId) => {
  const res = await instance.get(`/discover/movie?with_genres=${genreId}`)

  return res.data
}

const getPopulars = async () => {
  const res = await instance.get("/movie/popular");

  return res.data;
};
const getFavorites = async () => {
  const res = await instance.get("/movie/top_rated");

  return res.data;
};
const getCategories = async () => {
  const res = await instance.get("/genre/movie/list?language=en");

  return res.data;
};

async function Home({ params }) {
  const fetchDataPopular = getPopulars();
  const fetchDataFavorites = getFavorites();
  const fetchDataCategories = getCategories();

  const [
    { results: AllPopularMovies },
    { results: AllFavoritesMovies },
    { genres: Allcategories },
  ] = await Promise.all([
    fetchDataPopular,
    fetchDataFavorites,
    fetchDataCategories,
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
