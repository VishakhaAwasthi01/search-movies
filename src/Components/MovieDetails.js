import React, { useState, useEffect } from 'react'
import styles from './MovieDetails.module.css'
import { useHistory } from 'react-router-dom'
const MovieDetails = () => {
  const { detailsPoster } = styles
  const [movieDetails, setMovieDetails] = useState()
  const Detailsurl = new URL(window.location.href)
  const movieId = Detailsurl.searchParams.get('movieName')

  const getMovieDetails = async (moviesId) => {
    const url = `https://www.omdbapi.com/?i=${moviesId}&apikey=3a319feb`
    const detailResponse = await fetch(url)
    const convertDetailToJSON = await detailResponse?.json()
    setMovieDetails(convertDetailToJSON)
  }

  useEffect(() => {
    getMovieDetails(movieId)
  }, [movieId])
  let history = useHistory()
  function handleClick() {
    history.push(`/`)
  }

  return (
    <div className={`bg-dark`} style={{ minHeight: '100vh' }}>
      <div className="row">
        <p
          className="text-danger font-weight-bold mx-5 cursor-pointer"
          style={{ fontSize: '30px' }}
          onClick={() => handleClick()}
        >
          TENFLIX
        </p>
      </div>
      <div className="row">
        <div className={`col-lg-6 pt-4 pb-2 text-right mr-3`}>
          <img
            className={` ${detailsPoster}`}
            src={movieDetails?.Poster}
            alt=""
            style={{ width: '320px', height: '400px' }}
          />
          <div
            className={` text-white pt-5 pb-2 text-left`}
            style={{ maxWidth: '320px', marginLeft: 'auto' }}
          >
            <p>{movieDetails?.Plot}</p>
          </div>
        </div>

        <div className="col-lg-4 pt-4 pb-2 ml-3">
          <h2 className="font-weight-bold text-danger">
            {movieDetails?.Title}
          </h2>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Genre:
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Genre}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Duration :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Runtime}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Country:
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Country}
              </span>
            </p>
            <p className="text-white font-weight-bold mx-2">
              Year:
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Year}
              </span>
            </p>
            <p className="text-white font-weight-bold mx-2">
              Ratings:
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Ratings[0]?.Value}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Director :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Director}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Writer :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Writer}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Language :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Language}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Production :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Production}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Actors :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Actors}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              Awards :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.Awards}
              </span>
            </p>
          </div>
          <div className="row">
            <p className="text-white font-weight-bold ml-3 mr-2 ">
              BoxOffice Collection :
              <span className="text-white pl-2 font-weight-light">
                {movieDetails?.BoxOffice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieDetails
