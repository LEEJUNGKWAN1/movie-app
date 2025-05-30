import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImg, title, genres }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <MovieContainer>
      <CoverImage src={coverImg} alt={title} onClick={onClick} />
      <Title onClick={onClick}>{title}</Title>
      <GenreList>
        {genres.map((g) => (
          <GenreItem key={g}>{g}</GenreItem>
        ))}
      </GenreList>
    </MovieContainer>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

const MovieContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(78, 161, 247, 0.5);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  aspect-ratio: 3 / 4;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.2s ease;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 8px;
  font-weight: 700;
  color: #e0e0e0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;

  &:hover {
    color: #4169b2;
    transition: color 0.2s ease;
  }
`;

const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

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
