'use strict';
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const router = express.Router()
const { respondWith, CustomError } = require('./utils')
const PORT = process.env.PORT || 4040
const API_KEY = process.env.API_KEY
const app = express()

app.use(express.json({ limit: '5kb' }))
app.use(express.urlencoded({extended: false}))
app.use(compression())
app.use(cors())
app.use(helmet())
app.use(helmet.hidePoweredBy({setTo: 'PHP 7.0.1'}))
app.options('*', cors())

router.get('/api/ping', async (req, res) => {
    res.status(200).send(respondWith(200, 'server is up', true, null))
    
})

router.post('/api/movies', async (req, res, next) => {
    const query = req.body.movies
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    try {
        const { data } = await axios.get(endpoint)
        res.status(200).send({message: `Searched for '${query}'`, success: true, data})
    } catch (err) {
        console.log('Fetch error >> ', err)
        next(new CustomError('oops! could not fetch movies at the moment, please try again.', 404))
    }
})

router.use('*', (req, res) => {
    res.status(404).send({message: 'not found', status: 404, success: false})
})

router.use((err, req, res, next) => {
    switch (err.name) {
        case 'CustomError':
            return res.status(err.status).send(respondWith(err.status, err.message, false, null))
        
        default:
            res.status(500).send({message: 'internal', status: 500, success: false})
    }
})

app.use(router)
app.listen(PORT, ()=>console.log('App runing on ::', PORT))