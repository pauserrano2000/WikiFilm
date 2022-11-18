import "./MovieDetail.css";

const MovieDetail = (props) => {
  return (
    <div className="movieDetailsDesign">
      <div>
        <img className="movieDetailPoster" src={'https://image.tmdb.org/t/p/original/'+props.poster} alt={props.title} />
      </div>
      <div className="movieDetailTitle">
        {props.title}
      </div>
      <div className="movieDetailOverview">
        {props.overview}
      </div>
    </div>
  );
};

export default MovieDetail;
