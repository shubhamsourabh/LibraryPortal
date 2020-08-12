import React, { useState } from "react";
import loginStyles from "../../styles/login.module.css";
import { withRouter, useHistory, Redirect } from "react-router-dom";
//import axios from "axios";
import Axios from "axios";
//import Userhomescreen from "./Userhomescreen"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
//import Userhomescreen from "./Userhomescreen";
//import history from "./history";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  // const history = useHistory();
  const handleSubmit = async (e) => {
    // e.preventDefault();
    setRedirect(true);
    // this.props.history.push("/Userhomescreen");
    // let user = JSON.stringify({
    //   username,
    //   password,
    // });
    let url = "http://localhost:5000/users/login";
    let options = {
      method: "POST",
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        username: username,
        password: password,
      },
    };
    try {
      const response = await Axios(options);
      const { token } = await response.data;
      // console.log(response.data.name);

      if (token) {
        localStorage.setItem("token", token);
        //history.push("/Userhomescreen");
      } else {
        alert("User Doens't Exists");
      }

      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <>
      {redirect ? <Redirect to="/Userhomescreen" /> : ""}
      <section className={loginStyles.container}>
        <h1>Welcome To Login Page</h1>
        <section className={loginStyles.loginForm}>
          <Form onSubmit={handleSubmit}>
            <FormGroup controlId="email" bssize="large">
              <Label>Username</Label>
              <Input
                className={loginStyles.input}
                autoFocus
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password" bssize="large">
              <Label>Password</Label>
              <Input
                className={loginStyles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
              />
            </FormGroup>
            <Button
              className={loginStyles.loginBtn}
              bssize="large"
              disabled={!validateForm()}
              type="submit"
            >
              Login
            </Button>
          </Form>
        </section>
      </section>
    </>
  );
};

export default withRouter(Login);
