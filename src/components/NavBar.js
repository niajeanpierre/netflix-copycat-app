import React, { useEffect, useState } from 'react'
import netflixLogo from '../images/netflixLogo.png'
import { Button } from '@mui/material'

function NavBar () {
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

  console.log(movies[0])

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movies[6]?.poster_path})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '400px',
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px'
        }}
      >
        <img style={{ width: '90px', height: '90px' }} src={netflixLogo} />
        <Button color='error' variant='contained' sx={{ height: '40px' }}>
          Sign In
        </Button>
      </div>
      <div style={{padding: "20px"}}>
        <h1 style={{color:"#F4F4F4", fontSize:"70px", fontFamily:"initial"}}>{movies[6]?.original_title}</h1>
        <h3 style={{color:"#F4F4F4", }}>
          {movies[6].overview}
        </h3>
        <Button variant='contained' sx={{color:"black", bgcolor: "white", fontWeight:"bold"}}>View Trailer</Button>
      </div>
     
    </div>
  )
}

export default NavBar
