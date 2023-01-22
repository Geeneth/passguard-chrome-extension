import React from "react";
import { useState } from "react";
import "./password-styles.css";

function CheckPassword() {
  const [password, setPassword] = useState("");
  // use the password from the home page
  //   const password = props.password;
  let strength = 0;
  let color = "black";

  // Function to check the strength of the password
  function checkPasswordStrength() {
    let array = [false, false, false, false];
    for (let i = 0; i < password.length; i++) {
      let char = password[i];
      if (!isNaN(char)) {
        array[0] = true;
      } else if (!/^[a-zA-Z0-9]*$/.test(char)) {
        array[1] = true;
      } else if (char === char.toUpperCase()) {
        array[2] = true;
      } else if (char === char.toLowerCase()) {
        array[3] = true;
      }
    }
    if (password.length <= 4) {
      strength = "Instantly";
      color = "red";
      //strength = 1;
    } else if (array[0] && password.length <= 10) {
      strength = "Instantly";
      color = "red";
      //strength = 333;
    } else if (
      (array[3] && !array[2] && password.length <= 7) ||
      (array[2] && array[3] && password.length <= 6) ||
      (array[2] && array[3] && array[0] && password.length <= 5) ||
      (array[2] && array[3] && array[0] && array[1] && password.length <= 5)
    ) {
      strength = "Less than a Day";
      color = "#fc7f03";
      //strength = 55;
    } else if (
      (array[0] && password.length >= 11 && password.length <= 15) ||
      (array[3] &&
        !array[2] &&
        password.length >= 8 &&
        password.length <= 10) ||
      (array[2] && array[3] && password.length >= 7 && password.length <= 9) ||
      (array[2] &&
        array[3] &&
        array[0] &&
        password.length >= 6 &&
        password.length <= 8) ||
      (array[2] &&
        array[3] &&
        array[0] &&
        array[1] &&
        password.length >= 6 &&
        password.length <= 8)
    ) {
      strength = "Very Few Years";
      color = "#a3009b";
    } else if (
      (array[0] && password.length >= 16 && password.length <= 18) ||
      (array[3] &&
        !array[2] &&
        password.length >= 11 &&
        password.length <= 13) ||
      (array[2] &&
        array[3] &&
        password.length >= 10 &&
        password.length <= 11) ||
      (array[2] &&
        array[3] &&
        array[0] &&
        password.length >= 9 &&
        password.length <= 10) ||
      (array[2] &&
        array[3] &&
        array[0] &&
        array[1] &&
        password.length >= 9 &&
        password.length <= 10)
    ) {
      strength = "Many many decades";
      color = "#0048ff";
    } else if (
      (array[0] && password.length > 18) ||
      (array[3] && !array[2] && password.length > 14) ||
      (array[2] &&
        array[3] &&
        array[0] &&
        password.length >= 11 &&
        password.length > 13) ||
      (array[2] && array[3] && array[0] && array[1] && password.length > 11)
    ) {
      strength = "Millions of year even trillions";
      color = "#00a30e";
    }

    // return strength;
  }
  //   checkPasswordStrength();
  return (
    <div>
      <input
        className="add-password"
        type="text"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <div id="check-password">
        //button to check password
        <button onClick={checkPasswordStrength}>Check Password</button>
        
      </div> */}
      {checkPasswordStrength()}

      {/* //display the strength of the password with its respective color */}
      <p>
        Time to be cracked:{" "}
        <span id="generated-password-text" style={{ color: color }}>
          {strength}
        </span>
      </p>
    </div>
  );
}

export default CheckPassword;
