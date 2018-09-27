import React from 'react';
import './MovieSlider.css';
import Config from '../Config';
import img_404 from '../images/404.jpg'

class MovieSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }

        if(props.type === 'Similar Movies') {
            fetch('https://api.themoviedb.org/3/movie/'+ this.props.urlParams +'/similar?api_key=' + Config.api_key)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res.results });
            })
        } else if(props.type === 'Movies'){
            fetch('https://api.themoviedb.org/3/person/' + this.props.urlParams +'/movie_credits?api_key=' + Config.api_key)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res.cast });
            })
        } 
    }


    render() {
        if (this.state.data === '') return ('');

        let data_arr = [];
        for (let i in this.state.data) {
            data_arr.push(
                <div key={i} className="movies_card">
                    <div>
                        <img 
                            src={this.state.data[i].poster_path === null ? img_404 : "https://image.tmdb.org/t/p/" + Config.image_res + this.state.data[i].poster_path} 
                            alt=""
                        />
                    </div>
                    <div className="movie_title">
                        <h3>
                            <a href={"/movie-wiki/movie/" + this.state.data[i].id}>
                                {
                                    this.state.data[i].original_title.length > 13 ? 
                                    this.state.data[i].original_title.substring(0, 12) + '...' : this.state.data[i].original_title
                                }
                            </a>
                        </h3>
                    </div>
                </div>
            )
        }
        
        return(
            <div className="similar_movies">
                <h2>{this.props.type}</h2>
                {this.state.data.length === 0 ? <h4>No Movies Found!</h4> : '' }
                <div className="movies_card_wrapper">
                    {data_arr}
                </div>
            </div>
        )
    }
} 

export default MovieSlider;