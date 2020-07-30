const fetchMovies = async apikey => {
	const endpoint = ``
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

export default fetchMovies
