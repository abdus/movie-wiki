import React from 'react';
import './MovieDetails.css'
import MovieSlider from './MovieSlider';
import Reviews from './Reviews';
import MovieCast from './MovieCast';
import Meta from './Meta';
import Config from '../Config';
import img_404 from '../images/404.jpg';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            movie: null,
            genres: null, 
            producers: null,
            languages_spoken: null
        }

        // Fetching movie data from API and saving it in state 
        let genres_arr = [],
            languages_arr = [],
            producers_arr = [];
        fetch('https://api.themoviedb.org/3/movie/' + props.match.params.id +'?api_key=' + Config.api_key )
        .then(res => res.json())
        .then(res => {
            this.setState({movie: res});

            // pushing genres 
            for (let i in res.genres) {
                genres_arr.push(res.genres[i].name);
            }
            genres_arr = genres_arr.join(', ');
            // Pushing companies
            for (let i in res.production_companies) {
                producers_arr.push(res.production_companies[i].name)
            }
            producers_arr = producers_arr.join(', ');
            // Pushing languages
            for (let i in res.spoken_languages) {
                languages_arr.push(res.spoken_languages[i].name)
            }
            languages_arr = languages_arr.join(', ');
            this.setState({
                genres: genres_arr, 
                producers: producers_arr,
                languages_spoken: languages_arr
            });
        });
    }

    // A little helper for converting numbers to billion
    convertToBMK(num) {
        let num_str = num + "";
        if (num_str.length > 7) {
            return (((num / 1000) /1000) / 1000).toFixed(2) + " Billion"
        }
        if (num_str.length > 4) {
            return ((num / 1000) /1000).toFixed(2) + " Million"
        }
        if ((num_str.length > 0)){
            return ((num / 1000) /1000).toFixed(2) + " Thousand"
        } else {
            return num;
        }
    }

    changeDateFormat(dt) {
        let month_arr = [];
        month_arr['01'] = 'Jan';
        month_arr['02'] = 'Feb';
        month_arr['03'] = 'Mar';
        month_arr['04'] = 'Apr';
        month_arr['05'] = 'May';
        month_arr['06'] = 'June';
        month_arr['07'] = 'July';
        month_arr['08'] = 'Aug';
        month_arr['09'] = 'Sept';
        month_arr['10'] = 'Oct';
        month_arr['11'] = 'Nov';
        month_arr['12'] = 'Dec';
        
        let splitedDate = dt.split('-');
        return (splitedDate[2] + ' ' + month_arr[splitedDate[1]] + ', ' + splitedDate[0]);
    }

    render() {
        // Render a blank component if movie is null
        if (this.state.movie === null) return (
            <div className="movie_details loading">
                <br/><br/><br/>
                Loading...
            </div>
        );

        // Else, return a component with all the movie details 
        return(
            <div className="movie_details">
                <Meta data={this.state.movie}/>

                <h1>{this.state.movie.original_title}</h1>
                
                <h3>{this.state.movie.tagline}</h3>
                
                <img className="poster" 
                    src={
                        this.state.movie.poster_path === null ? img_404 : "https://image.tmdb.org/t/p/w342/" + this.state.movie.poster_path
                    } 
                    alt=""
                />

                <div>{this.state.movie.overview}</div>
                <br/>
                <div className="movie_overview">
                    <div style={{background: '#dfe2e4'}}>OVERVIEW</div>
                    
                    <div><strong>Rating:</strong> <span>{this.state.movie.vote_average + ' ⭐ (' + this.state.movie.vote_count + ')'}</span></div>

                    <div><strong>Budget:</strong> <span>{this.convertToBMK(this.state.movie.budget)}</span></div>

                    <div><strong>Collection:</strong> <span>{this.convertToBMK(this.state.movie.revenue)}</span></div>

                    <div><strong>Runtime:</strong> <span>{this.state.movie.runtime === null ? 'UNKNOWN' : this.state.movie.runtime + ' mins'}</span></div>

                    <div><strong>Release Date:</strong> <span>{this.changeDateFormat(this.state.movie.release_date)} {(this.state.movie.status === 'Released') ? '' : '(Upcoming)'}</span></div>

                    <div><strong>Suitable for:</strong> <span>{this.state.movie.adult ? 'Adults Only' : 'All Age'}</span></div>
                    
                    <div><strong>Popularity Score:</strong> <span>{this.state.movie.popularity.toFixed(0)}</span></div>

                    <div><strong>Language(s):</strong> <span>{this.state.languages_spoken}</span></div>

                    <div><strong>Genres:</strong> <span>{this.state.genres}</span></div>

                    <div><strong>Produced By:</strong> <span>{this.state.producers}</span></div>
                </div>
                <div className="clear_both"></div>

                {/* Movie Casts */}
                <MovieCast movieID={this.props.match.params.id}/>

                {/* Similar Movies Component */}
                <MovieSlider type="Similar Movies" urlParams={this.props.match.params.id}/>

                {/* Reviews Component */}
                <Reviews movieID={this.props.match.params.id}/>
            </div>
        )
    }
}

export default MovieDetails;