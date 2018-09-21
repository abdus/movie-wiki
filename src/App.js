import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movies: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }
 
  onSearchChange(event) {
    let searchTerm = event.target.value.trim() === '' ? 'Batman' : event.target.value;

    // Fetching the data 
    fetch('https://api.themoviedb.org/3/search/movie?api_key=9526f02a9f92adaf39272b5d785cff61&query=' + searchTerm)
    .then(res => res.json())
    .then(res => {
      this.setState({movies: res})
    })
  }

  render() {

    return(
      <Router>
        <div>
          <Nav/>
          <Route
            exact
            path="/movie-wiki/" 
            render= {(props) => <Header {...props} searchChange={this.onSearchChange}/>}
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
        </div>
      </Router>
    )
  }
}
