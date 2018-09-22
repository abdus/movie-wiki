import React from 'react';
import './MovieList.css';

const MovieList = ({ movies }) => {
    console.log('IN MOVIES LIST', movies);
    // For checking if the movies is populated 
    // If not populated, return a '' component
    // When state changes, this div will get re-rendered with usr cards 
    if (movies === '') return(
        <h3 style={{
            textAlign:'center',
            color: '#ffc864'
        }}>
            Search Something... 
        </h3>
    );

    // For checking if the movies is not empty 
    // If not populated, return a '' component
    if (movies.total_results === 0) return(
        <h3 style={{
            textAlign:'center',
            color: '#ffc864'
        }}>
            Nothing Found...
        </h3>
    );

    // For checking if the movies is undefined 
    // If not populated, return a '' component
    if (movies.error !== undefined) return(
        ''
    );
    
    // This block is meant for iterating and pushing all data
    // And than render it in the component 
    let movies_arr = [];
    for (let i in movies.results) {
        movies_arr.push(
            <div key={i} className="movies_card">
                <div>
                    <img 
                        src={"http://image.tmdb.org/t/p/w92/" + movies.results[i].poster_path} 
                        alt=""
                    />
                </div>
                <div className="movie_title">
                    <h3><a href={"/movie-wiki/movie/" + movies.results[i].id}>{movies.results[i].original_title}</a></h3>
                </div>
            </div>
        )
    }
    
    return (
        <div>
            <div className="movies_card_wrapper">
                {movies_arr}
            </div>
        </div>            
    )
}

export default MovieList;