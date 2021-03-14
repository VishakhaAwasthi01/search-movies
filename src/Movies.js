import './Movies.css'
import { useEffect, useState } from 'react'
import MoviesList from './MovieList'
import { useHistory } from 'react-router-dom'

function Movies() {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const [movieId, setMovieId] = useState()
  const getAllMovies = async (searchMovie) => {
    const url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=3a319feb`
    const res = await fetch(url)
    const convertToJSON = await res.json()
    setMovies(convertToJSON?.Search || '')
    setMovieId(convertToJSON?.Search?.Title)
  }

  useEffect(() => {
    getAllMovies(searchMovie)
  }, [searchMovie])

  const history = useHistory()
  console.log(history, 'hey')

  function handleClick() {
    history.push(`/movie_details/:${movieId}`)
  }

  return (
    <div className="mainDiv container-fluid bg-dark">
      <div className="row d-flex align-items-center my-4">
        <div className="col">
          <p
            className="text-danger font-weight-bold text-*-left cursor-pointer"
            style={{ fontSize: '30px' }}
          >
            TENFLIX
          </p>
        </div>

        <div className="col ml-auto">
          <form className="form-inline float-right">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e?.target?.value)}
              className="form-control inputClass"
              type="search"
              placeholder="Search for movies and shows"
              aria-label="Search"
            />
            <button type="button" className="btn btn-dark">
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
      <div className=" text-white text-center ">
        <h1 className="font-weight-bold">
          Unlimited Movies, TV shows and more.
        </h1>
        <h4>watch anywhere</h4>
      </div>
      {movies !== '' ? (
        <div className="row">
          <MoviesList movies={movies} onClick={() => handleClick()} />
        </div>
      ) : (
        <div
          className=" text-danger text-center font-weight-bold"
          style={{ marginTop: '60px', paddingBottom: '80px' }}
        >
          search for your movies.....
        </div>
      )}
    </div>
  )
}

export default Movies
