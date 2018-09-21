import React from 'react';
import './MovieList.css';

const MovieList = ({ movies }) => {
    console.log('IN MOVIES LIST', movies);
    // For checking if the movies is populated 
    // If not populated, return a '' component
    // When state changes, this div will get re-rendered with usr cards 
    if (movies === '') return('');

    // For checking if the movies is not empty 
    // If not populated, return a '' component
    if (movies.total_results === 0) return('');

    // For checking if the movies is not empty 
    // If not populated, return a '' component
    if (movies.error !== undefined) return('');
    
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
                    <h3><a href={"/movie/" + movies.results[i].id}>{movies.results[i].original_title}</a></h3>
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