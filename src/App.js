import React from 'react'
import './App.css'
import { useFirebaseApp } from 'reactfire'
import Auth from './components/auth'
import { useUser } from 'reactfire'
function App () {
  const firebase = useFirebaseApp()
  console.log(firebase)
  const user = useUser()
  return (
    <div className='App'>
      {user && (
        <div className='content'>
          <h1 className='h1'>User: {user.email}</h1>
        </div>
      )}
      <Auth />
    </div>
  )
}

export default App
