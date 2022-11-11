
import React, {useState, useEffect} from 'react';

import { searchFilms } from '../../services/apicalls';

const Search = () => {

    const [movies, setMovies] = useState([]);
    //const [query, setQuery] = useState("");

    useEffect(()=>{

        //This is always going to search for the film at first, not when you fulfill the input!!!!
        if(movies.length === 0){

            //As there is nothing on the movies hook, I am going to search for them....

            searchFilms('alien')
                .then(res => 
                    
                    setMovies(res.data.results)
                    
                    )
                .catch(error => console.log(error));
        } else {

            console.log("here are my precious movies!", movies);
        }

    },[movies]);

    return(
        <div>I am searching fine!</div>
    )

}

export default Search;