import React,{useState} from 'react'
import Nav from './Nav'
import SearchForm from './SearchForm'

const App = () => {

  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Fetch movies ::', query)
  }

  return (
    <>
      <Nav />
      <SearchForm query={query} change={e=> setQuery(e.target.value)} submit={handleSubmit}/>
    </>
  )
}

export default App
