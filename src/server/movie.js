import { instance } from ".";

const getSingleCategory = async (genreId) => {
  try {
    const response = await instance.get(
      `/discover/movie?with_genres=${genreId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error while fetching single category:", error);
    throw error;
  }
};

const getPopulars = async () => {
  try {
    const response = await instance.get("/movie/popular");
    return response.data;
  } catch (error) {
    console.error("Error while fetching popular movies:", error);
    throw error;
  }
};

const getFavorites = async () => {
  try {
    const response = await instance.get("/movie/top_rated");
    return response.data;
  } catch (error) {
    console.error("Error while fetching top rated movies:", error);
    throw error;
  }
};

const getCategories = async () => {
  try {
    const response = await instance.get("/genre/movie/list?language=en");
    return response.data;
  } catch (error) {
    console.error("Error while fetching movie categories:", error);
    throw error;
  }
};

const getMoviesDetail = async (movieId) => {
  const res = await instance.get(`/movie/${movieId}`);

  return res.data;
};

export {
  getSingleCategory,
  getPopulars,
  getFavorites,
  getCategories,
  getMoviesDetail,
};
