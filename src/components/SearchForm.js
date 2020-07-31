import React from 'react'

const SearchForm = ({query, change,submit}) => {
  return (
    <div className='jumbotron rounded-0'>
       <form onSubmit={submit} className="row no-gutters">
       <div className='col-11 col-sm-8 mx-auto'>
            <input
              type='text'
            className='form-control'
            placeholder='i.e Fast and Furious'
              value={query}
              onChange={change}
            />
      <div className='col-11 col-sm-4 mx-auto mt-3'>
        <button type="submit" className='btn btn-block' style={{'backgroundColor':'#90cea1'}}>Search</button>
      </div>
  </div>
   </form>
   </div>
)
}

export default SearchForm
