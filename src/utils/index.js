import axios from 'axios'

class Utils {
	/**
	 * 
	 * @param {*} url 
	 * @param {*} method 
	 */
	async fetch(url, data, method) {
		return await axios(url, {
			method: method ? method.toUpperCase() : 'GET',
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			},
			data: data
		})
	}

	/**
	 * 
	 * @param {*} query 
	 */
	async getMovies(query) {
		const url = '/api/movies'
		const {data} = await this.fetch(url, {movies: query}, 'post')
		return data
	}
	
	async ping() {
		console.log('Hello there!')
		const url = '/api/ping'
		const {data} = await this.fetch(url)
		return data
	}

}

export default new Utils()
