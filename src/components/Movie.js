import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCallback } from "react";

// 단일 영화 카드 컴포넌트
function Movie({ id, coverImg, title, genres }) {
  const navigate = useNavigate(); // useNavigate 훅으로 페이지 이동 함수 획득

  // 영화 클릭 시 상세 페이지로 이동 (메모이제이션으로 성능 최적화)
  const onClick = useCallback(() => {
    navigate(`/movie/${id}`);
  }, [navigate, id]);

  return (
    <MovieContainer>
      {/* 영화 포스터 - 클릭 시 상세 페이지로 이동 */}
      <CoverImage src={coverImg} alt={title} onClick={onClick} />

      {/* 영화 제목 - 클릭 시 상세 페이지로 이동 */}
      <Title onClick={onClick}>{title}</Title>

      {/* 장르 목록 렌더링 */}
      <GenreList>
        {genres.map((genre) => (
          <GenreItem key={`${id}-${genre}`}>{genre}</GenreItem>
        ))}
      </GenreList>
    </MovieContainer>
  );
}

export default Movie;

// 카드 전체를 감싸는 컨테이너
const MovieContainer = styled.div`
  background-color: #1e1e1e; // 다크 배경
  border-radius: 18px; // 둥근 모서리
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6); // 그림자

  // 호버 시 위로 살짝 뜨고 그림자 강조
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(78, 161, 247, 0.5);
  }
`;

// 영화 포스터 이미지
const CoverImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4; // 비율 고정
  object-fit: cover; // 이미지 꽉 채우기
  border-radius: 14px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: filter 0.2s ease;

  // 호버 시 약간 어두워짐
  &:hover {
    filter: brightness(0.9);
  }
`;

// 영화 제목 텍스트
const Title = styled.h2`
  font-size: 18px;
  margin: 10px 8px 0;
  font-weight: 700;
  color: #e0e0e0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #4169b2; // 호버 시 강조 색상
  }
`;

// 장르 리스트 (ul)
const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap; // 여러 줄로 줄바꿈
  gap: 8px;
  padding: 0;
  margin: 8px 0 0;
  list-style: none;
`;

// 장르 하나하나 (li)
const GenreItem = styled.li`
  font-size: 13px;
  color: #a0a0a0;
  background-color: #2c2c2c;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  user-select: none;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.1);
`;
