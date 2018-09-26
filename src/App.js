import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import About from './components/About';
import Footer from './components/Footer';
import GenresBar from './components/GenresBar';
import GenresMovieList from './components/GenresMovieList';
import PeopleDetails from './components/PeopleDetails';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
 
  onSearchChange(event) {
    event.preventDefault();

    let searchTerm = event.target.value.trim()

    // Return if No Search value is present
    if (searchTerm === '') return;

    // Fetching the data 
    fetch('https://api.themoviedb.org/3/search/movie?api_key=9526f02a9f92adaf39272b5d785cff61&include_adult=true&query=' + searchTerm)
    .then(res => res.json())
    .then(res => {
      this.setState({movies: res})
    })
  }
  
  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {

    return(
      <Router>
        <div>
          <Route
            path="/movie-wiki/"
            component={Nav}
          />
          <Route
            path="/movie-wiki/"
            component={GenresBar}
          />
          <Route
            exact
            path="/movie-wiki/" 
            render= {(props) => <Header {...props} searchChange={this.onSearchChange} formSubmit={this.onFormSubmit}/>}
          />
          <Route
            exact 
            path="/movie-wiki/"
            render= {(props) => <MovieList {...props} movies={this.state.movies}/>}
          />
          <Route
            exact 
            path="/movie-wiki/movie/:id"
            component={MovieDetails}
          />
          <Route
            exact 
            path="/movie-wiki/genres/:id"
            component={GenresMovieList}
          />
          <Route
            exact 
            path="/movie-wiki/people/:id"
            component={PeopleDetails}
          />
          <Route
            exact 
            path="/movie-wiki/about"
            component={About}
          />
          <Route
            path="/movie-wiki/"
            component={Footer}
          />
        </div>
      </Router>
    )
  }
}
