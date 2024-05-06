import { MovieCard } from "../../components/MovieCard";
import { movies } from "../../constants/moviesMock";
import { Popular } from "../Popular";
import { TopRated } from "../Top Rated";

const Home = () => {
  return (
    <div>
      <div className="overflow-x-auto bg-white m-0">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              genreId={movie.genre_ids[0]} // Corregido aquí
            />
          ))}
        </div>
      </div>
      <div className="text-3xl text-black font-bold">Popular</div>
      <Popular></Popular>
      <div className="text-3xl text-black font-bold">Top Rated</div>
      <TopRated></TopRated>
    </div>
  );
};

export default Home;
