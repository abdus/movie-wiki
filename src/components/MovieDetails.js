import React from 'react';
import './MovieDetails.css'

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: null
        }

        fetch('https://api.themoviedb.org/3/movie/' + props.match.params.id +'?api_key=9526f02a9f92adaf39272b5d785cff61')
        .then(res => res.json())
        .then(res => {
            this.setState({movie: res});
        });
    }

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
                
                <img className="poster" src={"http://image.tmdb.org/t/p/w342/" + this.state.movie.poster_path} alt=""/>

                <div>{this.state.movie.overview}</div>
                <br/>
                <div><strong>Popularity:</strong> {this.state.movie.popularity + '(Out of 50)'}</div>

                <div><strong>Collection:</strong> {this.convertToBillion(this.state.movie.revenue).toFixed(3) + ' Billion'}</div>

                <div><strong>Runtime:</strong> {this.state.movie.runtime === null ? 'UNKNOWN' : this.state.movie.runtime + ' mins'}</div>
                
                <div><strong>Produced By:</strong> {this.state.movie.production_companies[0].name}</div>

                <div><strong>Released On:</strong> {this.state.movie.release_date}</div>
            </div>
        )
    }
}

export default MovieDetails;