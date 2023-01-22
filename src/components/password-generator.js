import React, { useState } from "react";
import { useRef } from "react";
import "./password-styles.css";

function PasswordGenerator() {
  //state variable
  const [generatedPassword, setGeneratedPassword] = useState("");
  //state variable initialized with all letters
  const [letters, setLetters] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]);

  //get a random key from each quater of a keyboard
  function getPassword() {
    let password = "";
    const topLeftKeys = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
    ];
    const topRightKeys = [
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "^",
      "&",
      "*",
      "(",
      ")",
      "_",
      "+",
      "U",
      "I",
      "O",
      "P",
      "{",
      "}",
    ];
    const bottomLeftKeys = [
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "/",
      ":",
      ";",
      "'",
      "<",
      ">",
      "?",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
    ];
    const bottomRightKeys = [
      "j",
      "k",
      "l",
      ";",
      "'",
      "b",
      "n",
      "m",
      ",",
      ".",
      "/",
      ":",
      ";",
      "'",
      "<",
      ">",
      "?",
      "J",
      "K",
      "L",
      "B",
      "N",
      "M",
    ];

    //create a password of random length from 16 to 24
    const passwordLength = Math.floor(Math.random() * 8) + 16;

    //combine the random keys into a password
    //the password will be a random combination of keys from each quater of the keyboard
    //this is to avoid obvious keypaths like "qwerty" or "asdfgh"
    for (let i = 0; i < passwordLength; i++) {
      const randomKey = Math.floor(Math.random() * 4) + 1;

      if (randomKey === 1) {
        password += topLeftKeys[Math.floor(Math.random() * topLeftKeys.length)];
      } else if (randomKey === 2) {
        password +=
          topRightKeys[Math.floor(Math.random() * topRightKeys.length)];
      } else if (randomKey === 3) {
        password +=
          bottomLeftKeys[Math.floor(Math.random() * bottomLeftKeys.length)];
      } else if (randomKey === 4) {
        password +=
          bottomRightKeys[Math.floor(Math.random() * bottomRightKeys.length)];
      }
    }

    // return the password
    setGeneratedPassword(password);
  }

  //useeffect to run the function when the page loads
  React.useEffect(() => {
    getPassword();
  }, []);

  return (
    <div id="password-generator">
      <button className="generate-button" onClick={getPassword}>
        Generate Password
      </button>
      <br />
      <h1 className="generated-password">
        {generatedPassword}
      </h1>
    </div>
  );
}

export default PasswordGenerator;
