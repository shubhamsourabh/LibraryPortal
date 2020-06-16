import React, { useState } from "react"
import loginStyles from "../styles/login.module.css"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
  
    // To fetch either user exists in local storage
  
    
    const handleSubmit = async e => {
      e.preventDefault()
      let user = JSON.stringify({
        username,
        password,
      })
      try {
        const response = await fetch("http://localhost:5000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: user,
        })
        const { token } = await response.json()
        console.log(token)
        if (token) {
          localStorage.setItem("token", token)
          alert("Logged In")
         // navigate("/app/dashboard")
        } else {
          alert("User Doens't Exists")
        }
        // localStorage.setItem("token", token)
         setUsername("")
         setPassword("")
      } catch (err) {
        console.log(err)
      }
      
    }
  
    return (
      <section className={loginStyles.container}>
        <h1>Welcome To Login Page</h1>
        <section className={loginStyles.loginForm}>
          <form className={loginStyles.form}>
            <label htmlFor="username">Username</label>
            <input
              className={loginStyles.input}
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              name="username"
              required
            />
  
            <label htmlFor="password">Password</label>
            <input
              className={loginStyles.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              name="password"
              required
            />
            <button
              type="submit"
               onClick={handleSubmit}
              className={loginStyles.loginBtn}
            >
              Login
            </button>
           
          </form>
        </section>
      </section>
    )
}

export default Login