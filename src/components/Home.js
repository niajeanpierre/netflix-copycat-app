import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material'
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
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: '20px',
          paddingRight: '20px',
          paddingLeft: '20px'
        }}
      >
        {movies.map(movie => {
          return (
            <Grid item xs={3}>
              <Box>
                <Card>
                  <CardMedia
                    component='img'
                    height='140'
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  ></CardMedia>
                </Card>
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Home
