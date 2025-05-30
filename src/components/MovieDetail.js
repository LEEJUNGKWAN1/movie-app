import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MdArrowBack } from "react-icons/md";
import { useCallback } from "react";

// 영화 상세 정보를 받아 렌더링하는 컴포넌트
function MovieDetail({
  coverImg,
  title,
  summary,
  genres,
  year,
  rating,
  likeCount,
  torrents,
  trailerCode,
}) {
  const navigate = useNavigate(); // 라우팅을 위한 내비게이션 함수

  // 홈으로 돌아가는 버튼 클릭 핸들러 (메모이제이션)
  const handleGoHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // 토렌트가 있을 경우 첫 번째 다운로드 링크, 없으면 null
  const downloadUrl = torrents?.[0]?.url ?? null;

  // 좋아요 수를 천 단위로 포맷
  const formattedLikes = likeCount.toLocaleString();

  return (
    <>
      {/* 좌측 상단 고정된 홈(뒤로가기) 버튼 */}
      <HomeButton
        aria-label="Go back to home"
        onClick={handleGoHome}
        type="button"
      >
        <MdArrowBack />
      </HomeButton>

      <Wrapper>
        {/* 왼쪽: 포스터 및 다운로드/트레일러 버튼 */}
        <LeftSection>
          <Poster src={coverImg} alt={title} />

          {/* 다운로드 버튼 (링크 없으면 비활성화) */}
          <DownloadButton
            href={downloadUrl ?? "#"}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Download ${title}`}
            $disabled={!downloadUrl}
          >
            ⬇ Download
          </DownloadButton>

          {/* 트레일러 버튼 (있을 경우만 표시) */}
          {trailerCode && (
            <TrailerButton
              href={`https://www.youtube.com/watch?v=${trailerCode}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Watch trailer of ${title}`}
            >
              ▶ Watch Trailer
            </TrailerButton>
          )}
        </LeftSection>

        {/* 오른쪽: 영화 텍스트 정보 */}
        <RightSection>
          <Title>{title}</Title>
          <InfoText>
            {year} &bull; {genres?.join(" / ")}
          </InfoText>

          <Stats>
            <Rating aria-label={`Rating: ${rating}`}>⭐ {rating}</Rating>
            <Likes aria-label={`Likes: ${formattedLikes}`}>
              ❤️ {formattedLikes}
            </Likes>
          </Stats>

          <SectionTitle>Plot Summary</SectionTitle>
          <Summary>{summary}</Summary>
        </RightSection>
      </Wrapper>
    </>
  );
}

export default MovieDetail;

// 전체 레이아웃 래퍼: 포스터와 텍스트를 좌우로 정렬
const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
  flex-wrap: wrap; // 반응형 대응
`;

// 왼쪽 섹션: 포스터 및 버튼 정렬
const LeftSection = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 포스터 이미지 스타일
const Poster = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
`;

// 버튼 공통 스타일
const ButtonBase = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  user-select: none;
`;

// 다운로드 버튼 스타일 (비활성화 상태 처리 포함)
const DownloadButton = styled(ButtonBase)`
  background-color: #1db954;
  color: white;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  &:hover {
    background-color: #169c45;
  }
`;

// 트레일러 버튼 스타일
const TrailerButton = styled(ButtonBase)`
  background-color: #3f51b5;
  color: white;

  &:hover {
    background-color: #2f3e99;
  }
`;

// 오른쪽 텍스트 정보 영역
const RightSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

// 영화 제목
const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #82aaff;
  margin: 0;
`;

// 연도 및 장르 텍스트
const InfoText = styled.p`
  font-size: 16px;
  margin-top: 4px;
  color: #a0a0a0;
`;

// 평점과 좋아요를 묶은 영역
const Stats = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 16px;
  font-size: 16px;
  font-weight: 600;
`;

// 평점 스타일
const Rating = styled.span`
  color: gold;
`;

// 좋아요 수 스타일
const Likes = styled.span`
  color: #ff6b81;
`;

// 줄거리 섹션 제목
const SectionTitle = styled.h3`
  margin-top: 32px;
  font-size: 22px;
  color: #ffffff;
`;

// 줄거리 텍스트 스타일
const Summary = styled.p`
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.6;
  color: #dddddd;
`;

// 고정된 홈 버튼 (왼쪽 상단)
const HomeButton = styled.button`
  position: fixed;
  top: 24px;
  left: 24px;
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 28px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: #82aaff;
  }

  &:focus {
    outline: 2px solid #82aaff;
    outline-offset: 2px;
  }
`;
