import React from 'react';

function Login() {
const isLoggedIn = true; // This can be replaced with actual login logic
  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}

export default Login;