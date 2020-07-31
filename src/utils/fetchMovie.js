// sample request query
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

const fetchMovie = async ({apikey, query}) => {
	const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${query}`
	const response = await fetch(endpoint)
	if (response.ok) {
		return await response.json()
	}
	return Promise.reject(
		Object.assign({}, response, {
			status: response.status,
			message: response.statusText,
		})
	)
}

export default fetchMovie
