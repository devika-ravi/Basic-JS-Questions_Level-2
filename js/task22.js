function identifyMissingLetterIfAny() {

let string = document.getElementById("inputString").value;
  
  string = string.toLowerCase();

  for (let i = 0; i < string.length - 1; i++) {

    let currentCharCode = string.charCodeAt(i); // Get the ASCII value of the current letter
    let nextCharCode = string.charCodeAt(i + 1); // Get the ASCII value of the next letter

    // If there is a gap of more than 1 between the ASCII values, a letter is missing
    if (nextCharCode - currentCharCode > 1) {
      let missingLetter = String.fromCharCode(currentCharCode + 1); // Get the missing letter by converting the ASCII value to a character
      document.getElementById("result").innerHTML = "Missing letter: " +  missingLetter ;
      return;
    }
  }

  document.getElementById("result").innerHTML = "There is no missing letter!";
}

