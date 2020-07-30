import React from 'react'

const SearchForm = ({query, change,submit}) => {
  return (
    <div className='container-fluid bg-light p-4'>
       <form onSubmit={submit} className="row no-gutters">
       <div className='col-11 col-sm-8 mx-auto'>
            <input
              type='text'
            className='form-control'
            placeholder='(i.e Thor Ragnarok)'
              value={query}
              onChange={change}
            />
      <div className='col-11 col-sm-4 offset-sm-4 mt-3'>
        <button type="submit" className='btn btn-primary btn-block'>Search</button>
      </div>
  </div>
   </form>
   </div>
)
}

export default SearchForm
