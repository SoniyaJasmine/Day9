import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name: name,
      email: email,
      password: password
    });
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form action="" onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    <br />
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
    <br />
        <div className="form-gro">
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
    <br />
        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div className="result">
          <h2>Entered Details</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;