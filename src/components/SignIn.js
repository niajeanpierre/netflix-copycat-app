import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { Button } from '@mui/material'
import netflixLogo from '../images/netflixLogo.png'
import { auth, googleAuth } from '../firebase/setup'
import { useNavigate } from 'react-router-dom'

function SignIn () {
  const navigate = useNavigate()

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuth)

      auth.currentUser?.emailVerified && navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  console.log(auth?.currentUser)

  return (
    <div
      style={{ backgroundColor: '#181818', height: '100vh', padding: '20px' }}
    >
      <img style={{ width: '200px', height: '90px' }} src={netflixLogo} />
      <div style={{ position: 'fixed', left: '45%', top: '35%' }}>
        <Button onClick={googleSignIn} variant='contained' color='error'>
          Sign In with Google
        </Button>
        <br />
        <div>
          <h2 style={{ color: '#F4F4F4' }}>Watch Now!</h2>
        </div>
      </div>
    </div>
  )
}

export default SignIn
