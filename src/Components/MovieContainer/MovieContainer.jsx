import "./MovieContainer.css";

const MovieContainer = (props) => {
    return( 
        <div className="movieContainerDesign">
            {props.children}
        </div>
    )
};

export default MovieContainer;