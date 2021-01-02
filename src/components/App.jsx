import React,{useState, useEffect} from 'react'
import Nav from './Nav'
import SearchForm from './SearchForm'
import MovieList from './MovieList'
import Utils from '../utils'

const App = () => {

  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('Lions heart')
  const [isLoading, setISLoading] = useState(false)
  const [hasError, setHasError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setISLoading(true)
    setHasError(false)

    Utils.getMovies(query).then(res => {
      console.log('movies >> ', res.data)
      setISLoading(false)
      setMovies(res.data.results)
    }).catch(err => {
      setISLoading(false)
      if (err.response) {
        setHasError(err.response.data.message)
      } else {
        setHasError('Request failed')
      }
    })
  }

  useEffect(() => {
    Utils.ping().then(res => {
      console.log('Pinged the server >> ',res)
    }).catch(err => {
      console.log('Error >> ', err)
    })
  }, [])

  return (
    <>
      <Nav />
      <SearchForm query={query} change={e => setQuery(e.target.value)} submit={handleSubmit} />
      {isLoading && <p className='text-info lead text-center'>Fetching data <strong>{ query }</strong></p>}
      {hasError && <p className='text-danger lead text-center'>{ hasError }</p>}
      {!isLoading && <MovieList list={movies} />}
    </>
  )
}

export default App
