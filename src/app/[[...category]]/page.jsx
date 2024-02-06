import HomeContainer from "@/containers/Home";
import Link from "next/link";
import Movies from '@/mocks/movies.json'


  function Home ({ params }) {
  let selectedCategory;

  if(params.category?.length > 0) {
    selectedCategory = true
  }
  return <HomeContainer 
  selectedCategory = {{
    id: params.category?.[0] ?? "",
    movies: selectedCategory ? Movies.results.slice(0,7) : []
  }}/>;
}

export default Home