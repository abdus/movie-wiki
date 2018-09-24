import React from 'react';
import './SimilarMovies.css';

class SimilarMovies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            similarMovies: ''
        }

        fetch('https://api.themoviedb.org/3/movie/'+ this.props.movieID +'/similar?api_key=9526f02a9f92adaf39272b5d785cff61')
        .then(res => res.json())
        .then(res => {
            this.setState({ similarMovies: res });
        })

    }
    render() {
        if (this.state.similarMovies === '') return ('');

        let similar_movies_arr = [];
        for (let i in this.state.similarMovies.results) {
            similar_movies_arr.push(
                <div key={i} className="movies_card">
                    <div>
                        <img 
                            src={"https://image.tmdb.org/t/p/w92/" + this.state.similarMovies.results[i].poster_path} 
                            alt=""
                        />
                    </div>
                    <div className="movie_title">
                        <h3>
                            <a href={"/movie-wiki/movie/" + this.state.similarMovies.results[i].id}>
                                {
                                    this.state.similarMovies.results[i].original_title.length > 13 ? 
                                    this.state.similarMovies.results[i].original_title.substring(0, 12) + '...' : this.state.similarMovies.results[i].original_title
                                }
                            </a>
                        </h3>
                    </div>
                </div>
            )
        }
        
        return(
            <div className="similar_movies">
                <h2>Similar Movies</h2>
                {this.state.similarMovies.results.length === 0 ? <h4>No Similar Movies Found</h4> : '' }
                <div className="movies_card_wrapper">
                    {similar_movies_arr}
                </div>
            </div>
        )
    }
} 

export default SimilarMovies;