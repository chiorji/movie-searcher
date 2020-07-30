import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ list }) => {
  return (
    <ul>
      <MovieItem item={list}/>
  </ul>
)
}

export default MovieList
