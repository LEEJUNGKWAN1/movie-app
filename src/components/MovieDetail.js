function MovieDetail({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
    </div>
  );
}

export default MovieDetail;
