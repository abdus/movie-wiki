import React from 'react';
import img_404 from '../images/404.jpg';
import './MovieCast.css';

class MovieCast extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            castList: null
        }

        fetch('https://api.themoviedb.org/3/movie/' + this.props.movieID + '/credits?api_key=9526f02a9f92adaf39272b5d785cff61')
        .then(res => res.json())
        .then(res => {
            
            let cast_Arr = [];
            for(let i in res.cast) {
                cast_Arr.push(
                    <div key={i} className="cast_card">
                        <img src={ res.cast[i].profile_path === null ? img_404 : 'https://image.tmdb.org/t/p/w342' + res.cast[i].profile_path } alt=""/>
                        <h3>{res.cast[i].name}</h3>
                        <h5>{res.cast[i].character}</h5>
                    </div>
                )
            }
            
            this.setState({castList: cast_Arr});
        })
    }



    render() {
        return(
            <div className="movie_cast">
                <h2>Cast</h2>
                <div className="cast_card_wrapper">
                    {this.state.castList}
                </div>
            </div>
        )
    }
}

export default MovieCast;