import React from 'react'
import './Movies.css'
import { useHistory } from 'react-router-dom'

const MoviesList = (props) => {
  let history = useHistory()
  function handleClick(movieId) {
    history.push(`/movie_details?movieName=${movieId}`)
  }

  return (
    <div className="justify-content-start flex flex-wrap flex-row justify-content-lg-center movies">
      {props?.movies &&
        props?.movies?.map((each, i) => {
          return (
            <>
              <div
                key={i}
                className="posterClass"
                onClick={() => handleClick(each?.imdbID)}
              >
                <img
                  className=" p-3"
                  src={each?.Poster}
                  alt=""
                  style={{ height: '350px' }}
                />

                <h5 className="text-white font-weight-bold px-3 py-1">
                  {each.Title}
                </h5>
              </div>
            </>
          )
        })}
    </div>
  )
}
export default MoviesList
