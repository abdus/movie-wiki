import React from 'react';
import './GenresBar.css';
import genres_list from './Genres.json';

class GenresBar extends React.Component {
    constructor() {
        super();

        
        this.state = {
            genres_html: null
        }        
    }
    
    componentDidMount() {
        let genres_arr = [];

        // PUSHING top_rated, popular and upcoming 
        genres_arr.push(
            <span key='100'><a style={{color: 'yellow'}} href='/movie-wiki/genres/popular'>Popular</a></span>
        )
        genres_arr.push(
            <span key='101'><a style={{color: 'yellow'}} href='/movie-wiki/genres/upcoming'>Upcoming</a></span>
        )
        genres_arr.push(
            <span key='100'><a style={{color: 'yellow'}} href='/movie-wiki/genres/top_rated'>Top Rated</a></span>
        )


        for(let i in genres_list.genres) {
            if (genres_list.genres[i].name === 'Science Fiction') {
                genres_list.genres[i].name = 'Sci-Fi'
            } 
            genres_arr.push(
                <span key={i}><a href={'/movie-wiki/genres/' + genres_list.genres[i].id}>{genres_list.genres[i].name}</a></span>
            )
        }

        this.setState({genres_html: genres_arr})
    }
    
    render() {
        return(
            <div className="genres_bar">{this.state.genres_html}</div>
        )
    }
}

export default GenresBar;