import React from 'react'
import './Movies.css'
const MoviesList = (props) => {
  return (
    <div className="justify-content-start flex flex-wrap flex-row  movies">
      {props?.movies &&
        props?.movies?.map((each, i) => {
          return (
            <>
              <div key={i} className="posterClass m-3" onClick={props?.onClick}>
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
