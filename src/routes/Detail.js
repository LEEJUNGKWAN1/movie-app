import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import LoadingSpinner from "../components/LoadingSpinner";
import useMovie from "../hooks/useMovie";
import ErrorMessage from "../components/ErrorMessage";

// Detail 컴포넌트: 영화 상세 페이지를 렌더링
function Detail() {
  // useParams 훅을 사용해 URL에서 영화 ID를 추출
  const { id } = useParams();

  // useMovie 훅을 통해 영화 상세 데이터를 가져옴
  const { loading, movie, error } = useMovie(id);

  // 로딩 중일 경우 로딩 스피너 표시
  if (loading) return <LoadingSpinner />;

  // 에러 발생 시 에러 메시지 표시
  if (error) return <ErrorMessage message={error} />;

  // 영화 데이터가 없을 경우 아무것도 렌더링하지 않음 (예외 처리)
  if (!movie) return null;

  // 영화 데이터를 기반으로 상세 정보 컴포넌트 렌더링
  return (
    <MovieDetail
      coverImg={movie.large_cover_image}
      title={movie.title}
      summary={movie.description_full}
      genres={movie.genres}
      year={movie.year}
      rating={movie.rating}
      likeCount={movie.like_count}
      torrents={movie.torrents}
      trailerCode={movie.yt_trailer_code}
    />
  );
}

export default Detail;
