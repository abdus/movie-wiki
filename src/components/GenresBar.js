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
        for(let i in genres_list.genres) {
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