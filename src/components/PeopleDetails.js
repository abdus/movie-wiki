import React from 'react';
import './MovieDetails.css';
import img_404 from '../images/404.jpg';

export default class PeopleDetails extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            people: null
        }

        // Fetching movie data from API and saving it in state 
        fetch('https://api.themoviedb.org/3/person/' + props.match.params.id +'?api_key=9526f02a9f92adaf39272b5d785cff61')
        .then(res => res.json())
        .then(res => {
            this.setState({people: res});
        });
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
        if (this.state.people === null) return (
            <div className="movie_details loading">
                <br/><br/><br/>
                Loading...
            </div>
        );

        // Else, return a component with all the movie details 
        return(
            <div className="movie_details">
                
                <h1>{this.state.people.name}</h1>
                
                <h3><span style={{color: 'orange'}}>Also Known As:</span> {this.state.people.also_known_as.join(', ')}</h3>
                
                <img className="poster" 
                    src={
                        this.state.people.profile_path === null ? img_404 : "https://image.tmdb.org/t/p/w342/" + this.state.people.profile_path
                    } 
                    alt=""
                />

                <div style={{textAlign: 'justify'}}>{this.state.people.biography}</div>
                <br/>
                <div className="movie_overview">
                    <div style={{background: '#dfe2e4'}}>General Information</div>
                    
                    <div><strong>Birthday:</strong> <span>{this.changeDateFormat(this.state.people.birthday)}</span></div>

                    {this.state.people.deathday === null ? '' : <div><strong>Died On:</strong> <span>{this.changeDateFormat(this.state.people.deathday)}</span></div>}

                    <div><strong>Known For:</strong> <span>{this.state.people.known_for_department}</span></div>

                    <div><strong>Gender:</strong> <span>{this.state.people.gender === 2 ? 'Male' : this.state.people.gender === 1 ? 'Female' : 'Unspecified' }</span></div>

                    <div><strong>Popularity:</strong> <span>{this.state.people.popularity}</span></div>

                    <div><strong>Place of Birth:</strong> <span>{this.state.people.place_of_birth}</span></div>

                    <div><strong>Adult Actor:</strong> <span>{this.state.people.adult === true ? 'Yes' : 'No'}</span></div>
                    
                    {this.state.people.homepage === null ? '' : <div><strong>Website:</strong> <span>{<a href={this.state.people.homepage}>Visit</a>}</span></div>}

                    {/* <div><strong>Language(s):</strong> <span>{this.state.languages_spoken}</span></div>

                    <div><strong>Genres:</strong> <span>{this.state.genres}</span></div>

                    <div><strong>Produced By:</strong> <span>{this.state.producers}</span></div> */}
                </div>
                <div className="clear_both"></div>
            </div>
        )
    }
}
