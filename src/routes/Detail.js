import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>{movie.title} ({movie.year})</h1>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h3>rate: {movie.rating} <br></br> genres: {movie.genres}</h3>
            <p>{movie.description_full}</p>
        </div>
    )
}

export default Detail;