import React, { useState } from 'react';

function EstimateCrackTime() {
  const [password, setPassword] = useState('');
  const [estimate, setEstimate] = useState('');

  // Define the number of possible characters
  const possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()_-+=,.?/:;{}[]";
  // Define the number of guesses per second
  const guessesPerSecond = 100000000; // 100 million

  function handleSubmit(e) {
    e.preventDefault();
    // Calculate the number of possible combinations
    const possibleCombinations = Math.pow(possibleChars.length, password.length);
    // Calculate the estimated time to crack the password
    const estimatedTime = possibleCombinations / guessesPerSecond;
    // Convert estimated time to days, hours, minutes, and seconds
    const days = Math.floor(estimatedTime / (60 * 60 * 24));
    const hours = Math.floor(estimatedTime / (60 * 60)) % 24;
    const minutes = Math.floor(estimatedTime / 60) % 60;
    const seconds = Math.floor(estimatedTime) % 60;
    // Return the estimated time in the format "X days X hours X minutes X seconds"
    setEstimate(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Estimate Crack Time</button>
      <div>{estimate}</div>
    </form>
  );
}

export default EstimateCrackTime;