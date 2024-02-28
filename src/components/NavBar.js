import React, { useEffect, useState } from 'react'
import netflixLogo from "../images/netflixLogo.png"
import { Button } from '@mui/material'

function NavBar() {
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
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies[4]?.poster_path})`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"400px", width:"100%"}}>
      <img style={{width:"110px", height: "90px"}} src={netflixLogo}/>
      <Button>SignIn</Button>
      </div>
  )
}

export default NavBar