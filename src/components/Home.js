import { Box, Card, CardContent, CardMedia } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Home () {

const [movies, setMovies] = useState([])

  /**
   * The function `getMovie` makes a fetch request to retrieve a list of movies from a movie database
   * API and logs the results to the console.
   */
  const getMovie = () => {
    try {
      fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=603e12b90b1dcd1e0df21be534092ac4'
      )
        .then(res => res.json())
        .then(json => setMovies(json.results))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  console.log(movies)

  return (
  <div>
    {movies.map((movie) => {
      return <Box>
      <Card>
        <CardContent>
          <CardMedia 
          component="img"
          height="140"
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>

          </CardMedia>
        </CardContent>
      </Card>
    </Box>
    })}
  </div>
  )
}

export default Home
