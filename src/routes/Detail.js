import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]); // id가 바뀔 때마다 getMovie 호출
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
