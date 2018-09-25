import React from 'react';
import './MovieList.css';
import './GenresMovieList.css';
import img_404 from '../images/404.jpg';

class GenresMovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=9526f02a9f92adaf39272b5d785cff61&with_genres=' + this.props.match.params.id)
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
            this.setState({movies: movies_arr});
        })
    }
    // For checking if the movies is populated 
    // If not populated, return a '' component
    // When state changes, this div will get re-rendered with usr cards 
    render() {
                                    
        return (
            <div className="genres_movie_list">
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