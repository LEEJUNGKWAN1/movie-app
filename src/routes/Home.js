import styled from "styled-components";
import useMovies from "../hooks/useMovies";
import LoadingSpinner from "../components/LoadingSpinner";
import Movie from "../components/Movie";
import ErrorMessage from "../components/ErrorMessage";

// Home 컴포넌트: 메인 페이지로 영화 목록을 렌더링
function Home() {
  // useMovies 훅을 통해 loading, movies, error 상태를 가져옴
  const { loading, movies, error } = useMovies();

  // 데이터 로딩 중일 때 로딩 스피너 렌더링
  if (loading) return <LoadingSpinner />;

  // 에러 발생 시 에러 메시지 렌더링
  if (error) return <ErrorMessage message={error} />;

  // 정상적으로 영화 데이터를 가져왔을 때 메인 콘텐츠 렌더링
  return (
    <Container>
      {/* 페이지 제목 */}
      <Header>SnapFlick</Header>

      {/* 영화 목록을 그리드 형태로 렌더링 */}
      <MovieList>
        {/* 영화 배열을 map으로 순회하며 Movie 컴포넌트 생성 */}
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
    </Container>
  );
}

export default Home;

// 전체 페이지 컨테이너 스타일: 여백 설정
const Container = styled.div`
  padding: 20px;
`;

// 제목 스타일: 중앙 정렬 및 색상 강조
const Header = styled.h1`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  color: #82aaff;
  cursor: default;
`;

// 영화 목록 그리드 스타일: 5열 그리드로 정렬하고 간격 및 너비 지정
const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // 5개의 열로 구성된 그리드
  gap: 24px; // 카드 간 간격
  max-width: 1200px; // 최대 너비 제한
  margin: 0 auto; // 가운데 정렬
`;
