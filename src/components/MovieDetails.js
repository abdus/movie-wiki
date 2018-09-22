import React from 'react';
import './MovieDetails.css'
import SimilarMovies from './SimilarMovies';
import Reviews from './Reviews';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: null
        }

        // Fetching movie data from API and saving it in state 
        fetch('https://api.themoviedb.org/3/movie/' + props.match.params.id +'?api_key=9526f02a9f92adaf39272b5d785cff61')
        .then(res => res.json())
        .then(res => {
            this.setState({movie: res});
        });
    }

    // A little helper for converting numbers to billion
    convertToBillion(num) {
        return ((num / 1000) / 1000) /1000;
    }

    render() {
        // Render a blank component if movie is null
        if (this.state.movie === null) return ('');

        // Else, return a component with all the movie details 
        return(
            <div className="movie_details">
                
                <h2>{this.state.movie.original_title}</h2>
                
                <h4>{this.state.movie.tagline}</h4>
                
                <img className="poster" src={"https://image.tmdb.org/t/p/w342/" + this.state.movie.poster_path} alt=""/>

                <div>{this.state.movie.overview}</div>
                <br/>
                <div className="movie_overview">
                    <div style={{background: '#e0b461'}}>OVERVIEW</div>
                    <div><strong>Popularity(50):</strong> <span>{this.state.movie.popularity.toFixed(0)}</span></div>

                    <div><strong>Collection:</strong> <span>{this.convertToBillion(this.state.movie.revenue).toFixed(2) + ' Billion USD'}</span></div>

                    <div><strong>Runtime:</strong> <span>{this.state.movie.runtime === null ? 'UNKNOWN' : this.state.movie.runtime + ' mins'}</span></div>
                    
                    <div><strong>Produced By:</strong> <span>{this.state.movie.production_companies.length === 0 ? '' : this.state.movie.production_companies[0].name}</span></div>

                    <div><strong>Release Date:</strong> <span>{this.state.movie.release_date}</span></div>

                    <div><strong>Suitable for:</strong> <span>{this.state.movie.adult ? 'Adults Only' : 'All Age'}</span></div>

                    <div><strong>Rating:</strong> <span>{this.state.movie.vote_average + ' (' + this.state.movie.vote_count + ' Votes)'}</span></div>
                </div>
                <div className="clear_both"></div>

                {/* Similar Movies Component */}
                <SimilarMovies movieID={this.props.match.params.id}/>

                {/* Reviews Component */}
                <Reviews movieID={this.props.match.params.id}/>
            </div>
        )
    }
}

export default MovieDetails;