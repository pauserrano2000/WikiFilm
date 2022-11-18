import "./MovieItem.css";

const MovieItem = (props) => {
  return (
    <div className="movieItemDesign" onClick={props.onClick}>
      <div>
        <img className="moviePoster" src={'https://image.tmdb.org/t/p/original/'+props.poster} alt={props.title} />
      </div>
      <div className="movieTitle">{props.title}</div>
    </div>
  );
};
export default MovieItem;
