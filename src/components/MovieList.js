import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({ list }) => {
  return (
    <ul className='list-unstyled row no-gutters mb-5'>
      {list.map((listItem, index) => (
        <MovieItem key={index} item={listItem}/>
      ))}
  </ul>
)
}

export default MovieList
