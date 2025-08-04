import React from 'react'
import { useState } from 'react';

export default function Task4() {
  
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Age:', age);
    console.log('State:', state);
    console.log('Gender:', gender);
    console.log('Accepted:', accepted);
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <label>Age: </label>
          <input type="number" onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <label>State: </label>
          <select onChange={(e) => setState(e.target.value)}>
            <option value="">Select</option>
            <option value="OD">OD</option>
            <option value="AP">AP</option>
            <option value="TN">TN</option>
          </select>
        </div>

        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
        </div>

        <div>
          <input type="checkbox" onChange={(e) => setAccepted(e.target.checked)} />
          <label> I accept the contract</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}