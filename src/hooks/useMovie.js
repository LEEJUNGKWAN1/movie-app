import { useState, useEffect } from "react";

// useMovie: 특정 영화 ID로 영화 상세 정보를 API에서 가져오고 상태를 관리하는 커스텀 훅
function useMovie(id) {
  // 로딩 여부를 나타내는 상태 (초기값: true)
  const [loading, setLoading] = useState(true);

  // 영화 상세 데이터를 저장할 상태 (초기값: null)
  const [movie, setMovie] = useState(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState(null);

  // id가 변경될 때마다 영화 상세 정보를 요청
  useEffect(() => {
    // id가 없으면 요청하지 않음
    if (!id) return;

    // 비동기 함수로 API 호출
    const fetchMovie = async () => {
      try {
        // 요청 시작 전 상태 초기화
        setLoading(true);
        setError(null);
        setMovie(null);

        // YTS API에서 영화 상세 정보 요청
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );

        // HTTP 응답 상태가 실패면 에러 발생
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        // 응답을 JSON으로 파싱
        const json = await response.json();

        // 영화 상세 데이터가 있으면 저장
        setMovie(json.data.movie);
      } catch (err) {
        // 에러 발생 시 에러 메시지 저장
        setError(err.message);
      } finally {
        // 로딩 상태 종료
        setLoading(false);
      }
    };

    // 함수 실행
    fetchMovie();
  }, [id]); // id가 바뀔 때마다 재실행

  // 상태 반환
  return { loading, movie, error };
}

export default useMovie;
