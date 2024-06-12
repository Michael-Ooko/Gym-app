import React from 'react';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
