import { useState, useEffect } from "react";

// useMovies: 영화 목록을 API에서 가져오고 상태를 관리하는 커스텀 훅
function useMovies() {
  // 로딩 여부를 나타내는 상태
  const [loading, setLoading] = useState(true);

  // 영화 목록 데이터를 저장할 상태
  const [movies, setMovies] = useState([]);

  // 에러 메시지를 저장할 상태
  const [error, setError] = useState(null);

  // 컴포넌트가 처음 마운트될 때 영화 데이터 요청
  useEffect(() => {
    // 비동기 함수로 API 호출
    const fetchMovies = async () => {
      try {
        // 요청 시작 전 상태 초기화
        setLoading(true);
        setError(null);

        // YTS API에서 평점 9 이상, 연도 기준 내림차순으로 정렬된 영화 가져오기
        const response = await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        );

        // HTTP 응답 상태가 실패인 경우 에러 던지기
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        // 응답을 JSON으로 파싱
        const json = await response.json();

        // 영화 데이터가 존재하면 저장, 없으면 빈 배열
        setMovies(json.data.movies || []);
      } catch (err) {
        // 에러 발생 시 에러 메시지 저장
        setError(err.message);
      } finally {
        // 로딩 상태 종료
        setLoading(false);
      }
    };

    // 함수 실행
    fetchMovies();
  }, []); // 의존성 배열이 비어 있어 마운트 시 한 번만 실행됨

  // 컴포넌트에서 사용할 수 있도록 상태 반환
  return { loading, movies, error };
}

export default useMovies;
