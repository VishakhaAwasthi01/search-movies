import React, { useState, useEffect } from 'react'

const MovieDetails = (props) => {
  const [movieDetails, setMovieDetails] = useState()
  const getMovieDetails = async (movieId) => {
    const url = `http://www.omdbapi.com/?t=${movieId}`
    const detailResponse = await fetch(url)
    const convertDetailToJSON = await detailResponse?.json()
    console.log(convertDetailToJSON)

    // setMovieDetails(convertDetailToJSON)
  }

  useEffect(() => {
    getMovieDetails(props?.movieId)
  }, [props?.movieId])
  return (
    <div>
      {/* {props?.movies &&
        props?.movies?.map((each, i) => {
          return (
            <>
              <div key={i} className="posterClass m-3">
                <img
                  className=" p-3"
                  src={each?.Poster}
                  alt=""
                  style={{ height: '350px' }}
                />

                <h5 key={i} className="text-white font-weight-bold px-3 py-1">
                  {each.Title}
                </h5>
              </div>
            </>
          )
        })} */}
    </div>
  )
}
export default MovieDetails
