import React, { useEffect } from 'react'

function Home () {
  const getMovie = () => {
    try {
      fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=603e12b90b1dcd1e0df21be534092ac4'
      )
        .then(res => res.json())
        .then(json => console.log(json.results))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])

  return
  ;<div>Home</div>
}

export default Home
