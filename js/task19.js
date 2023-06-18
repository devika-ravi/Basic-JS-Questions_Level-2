function stringIsValid(string) {
  const bracketStack = [];

  //Map of opening and closing characters
  const map = {"(" : ")" , "{" : "}" , "[" : "]"};

  for (let i = 0 ; i < string.length ; i++) {
    let character = string[i];

    if (character === "(" || character === "{" || character === "[") {        // If the character is an opening bracket, push it onto the bracketStack
      bracketStack.push(character);
    } else if (character === ")" || character === "}" || character === "]") { // If the character is an closing bracket, push it onto the bracketStack
      // If the stack is empty or the closing bracket doesn't match the top of the stack, return false
      if (bracketStack.length === 0 || map [bracketStack.pop()] !== character) {
        return false;
      }
    }
  }
  
  // If the stack is empty, all brackets have been closed correctly
  return bracketStack.length === 0;
}

function checkIfBracketsClosedCorrectly() {
  let string = document.getElementById("inputString").value;

  const isValid = stringIsValid(string);

  if (isValid){
    document.getElementById("result").innerHTML = 'The string "' + string + ' is Valid!';
  } else {
    document.getElementById("result").innerHTML = 'The string "' + string + ' is NOT Valid!';
  }

  // document.getElementById("result").innerHTML = (`"The string "${string}" is ${isValid ? 'valid' : 'not valid'}.`);
}