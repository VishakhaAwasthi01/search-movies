import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Movies from './Movies'
import MovieDetails from './Components/MovieDetails'

const App = () => (
  <Router>
    <Route exact path="/" component={Movies} />
    <Route path="/movie_details/:movieId" component={MovieDetails} />
  </Router>
)

export default App
