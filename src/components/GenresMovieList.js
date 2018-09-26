import React from 'react';
import './MovieList.css';
import './GenresMovieList.css';
import GenresJSON from './Genres.json'
import img_404 from '../images/404.jpg';

class GenresMovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            genres_type: null
        }
    }

    fetchMovieList(url, genres_name = '') {
        fetch(url)
        .then(res => res.json()) 
        .then(res => {
            // This block is meant for iterating and pushing all data
            // And than render it in the component 
            let movies_arr = [];

            for (let i in res.results) {
                movies_arr.push(
                    <div key={i} className="movies_card">
                        <div>
                            <img 
                                src={
                                    res.results[i].poster_path === null ? img_404 : "https://image.tmdb.org/t/p/w92/" + res.results[i].poster_path
                                } 
                                alt=""
                            />
                        </div>
                        <div className="movie_title">
                            <h3><a href={"/movie-wiki/movie/" + res.results[i].id}>{res.results[i].original_title}</a></h3>
                        </div>
                    </div>
                )
            }
            this.setState({movies: movies_arr, genres_type: genres_name});
        })
    }

    componentDidMount() {
        let url2fetch = null;
        if(
            this.props.match.params.id === 'top_rated' || 
            this.props.match.params.id === 'popular' || 
            this.props.match.params.id === 'upcoming'
        ) {
            url2fetch = 'https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=9526f02a9f92adaf39272b5d785cff61'
            
            let genresName = this.props.match.params.id;
            if (this.props.match.params.id === 'top_rated') {
                genresName = 'Top Reated';
            }
            
            return this.fetchMovieList(url2fetch, genresName);

        } else if (this.props.match.params.id === '7_plus_rating') {
            url2fetch = 'https://api.themoviedb.org/3/discover/movie?api_key=9526f02a9f92adaf39272b5d785cff61&sort_by=vote_count.desc&include_adult=false&include_video=true&vote_average.gte=7&vote_count.gte=5000';

            return this.fetchMovieList(url2fetch, '7+ Rating 🌟');
        } else {
            url2fetch = 'https://api.themoviedb.org/3/discover/movie?api_key=9526f02a9f92adaf39272b5d785cff61&with_genres=' + this.props.match.params.id;

            for(let i in GenresJSON.genres) {
                if(GenresJSON.genres[i].id === +this.props.match.params.id) {
                    return this.fetchMovieList(url2fetch, GenresJSON.genres[i].name);
                }
            }
            return this.fetchMovieList(url2fetch);
        }
        
    }
    // For checking if the movies is populated 
    // If not populated, return a '' component
    // When state changes, this div will get re-rendered with usr cards 
    render() {
        if (this.state.movies === null) return (
            <div className="genres_movie_list"></div>
        );                    
        return (
            <div className="genres_movie_list">
                <h1>{this.state.genres_type.toUpperCase()}</h1>
                <div className="movie_list">
                    <div className="movies_card_wrapper">
                        {this.state.movies}
                    </div>
                </div> 
            </div>           
        )
    }
}

export default GenresMovieList;