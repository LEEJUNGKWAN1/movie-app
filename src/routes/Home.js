import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []); // 빈 배열: 컴포넌트 첫 마운트 시 한 번만 실행
  return (
    <Container>
      <Header>StarFlix</Header>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <MovieList>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </MovieList>
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

const Loading = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #555;
`;

const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
`;
