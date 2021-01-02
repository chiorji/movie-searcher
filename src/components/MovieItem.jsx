import React from 'react'

const MovieItem = ({item}) => (
  <li className='col-11 col-sm-8 mx-auto shadow border rounded p-2 mb-4' key={item.id}>
    <div className='row d-flex flex-column flex-sm-row no-gutters'>
      <div className='col-11 col-sm-3 h-100 h-sm-25 w-100 w-sm-25 mx-auto text-center'>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`} alt={item.title} className='img-fluid' />
      </div>
      <div className='col col-sm-9'>
           <h4 className='p-1 pb-1 mt-2 mt-sm-0 p-sm-3 text-light rounded' style={{'backgroundColor':'#01b4e4'}}>{item.title}</h4>
        <div className='d-flex justify-content-around small'>
          <span className='badge bagde-danger w-50 p-2'>Popularity: {parseInt(item.popularity)}</span>
          <span className="badge bagde-danger w-50 p-2">Realease: {item.release_date}</span>
       </div>
        <div className='mt-sm-2'>
          <h5 className='mb-0 px-2' style={{'color':'#90cea1'}}>Overview</h5>
          <p className='p-2'>{item.overview}</p>
        </div>
      </div>
   </div>
  </li>
)

export default MovieItem
