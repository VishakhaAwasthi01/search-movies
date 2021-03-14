import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Movies from './Components/Movies'
import MovieDetails from './Components/MovieDetails'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route path="/movie_details" component={MovieDetails} />
    </Switch>
  </Router>
)

export default App
