import React from 'react'

const MovieItem = ({item}) => item.map((itemData, index) => (
  <li key={index}>{itemData.name}</li>
))

export default MovieItem
