import './Movies.css'
import { useEffect, useState } from 'react'
import MoviesList from './MovieList'

function Movies() {
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const getAllMovies = async (searchMovie) => {
    const url = `https://www.omdbapi.com/?s=${searchMovie}&apikey=3a319feb`
    const res = await fetch(url)
    const convertToJSON = await res.json()
    setMovies(convertToJSON?.Search || '')
  }

  useEffect(() => {
    getAllMovies(searchMovie)
  }, [searchMovie])

  return (
    <div className="mainDiv  bg-dark">
      <div className=" d-md-flex flex-lg-row align-items-center ">
        <div className="col">
          <p
            className="text-danger font-weight-bold text-*-left cursor-pointer"
            style={{ fontSize: '30px', marginLeft: '10px' }}
          >
            TENFLIX
          </p>
        </div>

        <div className="col ml-lg-auto">
          <form className="form-inline float-lg-right">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e?.target?.value)}
              className="form-control inputClass"
              type="search"
              placeholder="Search for movies and shows"
              aria-label="Search"
            />
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => getAllMovies(searchMovie)}
            >
              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
      <div className=" text-white text-center mt-5">
        <h1 className="font-weight-lg-bold">
          Unlimited Movies, TV shows and more.
        </h1>
        <h4>watch anywhere</h4>
      </div>
      {movies?.length ? (
        <div className="row">
          <MoviesList movies={movies} />
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
