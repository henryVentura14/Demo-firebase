import React, { useState } from 'react'
import 'firebase/auth'
import { useFirebaseApp, useUser } from 'reactfire'
import "./auth.css"
export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const firebase = useFirebaseApp()
  const user = useUser()
  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  }
  const subtmit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  const logout = async () => {
    await firebase.auth().signOut()
  }
  return (
    <div>
      {!user && (
        <div className="container">
          <div className="c1">
            <div className="c11">
              <h1 className="mainhead">PICK YOUR SPOT</h1>
              <p className="mainp">Just click the buttons below to toggle between SignIn & SignUp</p>
            </div>
            <div id="left" onClick={() => setShow(!show ? !show : show)}><h1 className="s1class"><span>SIGN</span><span className="su">IN</span>
            </h1></div>
            <div id="right" onClick={() => setShow(!show ? show : !show)}><h1 className="s2class"><span>SIGN</span><span className="su">UP</span></h1></div>
          </div>
          <div className="c2">
            {!show && (
              <div className="signup">
                <h1 className="signup1">SIGN UP</h1>
                <input name="username"
                  id='userName'
                  type="text"
                  placeholder="Username*"
                  className="username" />
                <input name="email"
                  id='email'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email*"
                  className="username"
                  required
                />
                <input name="password"
                  id='password'
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password*"
                  className="username" />
                <button onClick={subtmit} className="btn">Sign Up</button>
              </div>
            )}
            {show && (
              <div className="signin">
                <h1 className="signup1">SIGN IN</h1>
                <input id='email'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email*"
                  className="username"
                  required
                />
                <input name="password"
                  id='password'
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password*"
                  className="username" />
                <button onClick={login} className="btn">Get Started</button>
              </div>
            )}
          </div>
        </div>
      )}
      {user && <button className="btn" onClick={logout}>Close Session</button>}
    </div>
  )
}
