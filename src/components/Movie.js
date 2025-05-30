import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ id, coverImg, title, genres }) {
  return (
    <MovieContainer>
      <CoverImage src={coverImg} alt={title} />
      <Title>
        <Link to={`/movie/${id}`}>{title}</Link>
      </Title>
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
  background-color: #e0e0e0;
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 12px 0;
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #0077cc;
    }
  }
`;

const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

const GenreItem = styled.li`
  margin-right: 10px;
  font-size: 12px;
  color: #777;
  background-color: rgb(214, 214, 214);
  padding: 4px 8px;
  border-radius: 8px;
`;
