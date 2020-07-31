import React,{useState} from 'react'
import Nav from './Nav'
import SearchForm from './SearchForm'
import MovieList from './MovieList'
import fetchMovie from '../utils/fetchMovie'

const App = () => {

  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('Fast and Furious')
  const [isLoading, setISLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const apikey = process.env.REACT_APP_APIKEY

  const handleSubmit = e => {
    e.preventDefault()
    setISLoading(true)
    setHasError(false)

    fetchMovie({apikey, query}).then(movie => {
      setISLoading(false)
      setMovies(movie.results)
    }).catch(err => {
      setISLoading(false)
      setHasError(true)
      console.log(err)
    })
  }

  return (
    <>
      <Nav />
      <SearchForm query={query} change={e => setQuery(e.target.value)} submit={handleSubmit} />
      {isLoading && <p className='text-info lead text-center'>Loading data...</p>}
      {hasError && <p className='text-danger lead text-center'>Error loading data</p>}
      {!isLoading && <MovieList list={movies} />}
    </>
  )
}

export default App
