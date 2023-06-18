function numberOfOccurrenceOfAlphabets$MaxOccurrence() {
  let string = document.getElementById("inputString").value;
  string = string.toLowerCase();
  let occurrences = {};

  //Counting occurences of each alphabet
  for (let i = 0; i < string.length; i++) {
    console.log("i = " + i)
    let character = string.charAt(i);
    console.log("character = " + character)
    if (character.match(/[a-z]/i)) {
      console.log("occurrences[character] = " + occurrences[character])
      if (occurrences[character]) {
        occurrences[character]++;
        console.log("if occurrences[character]: occurrences[character]++ = " + occurrences[character] + "\n\n")
      } else {
        occurrences[character] = 1;
        console.log("if NOT occurrences[character]: occurrences[character] = " + occurrences[character] + "\n\n")
      }
    }
  }

  //Finding maximum occuring alphabet
  let maximumCounter = 0;
  let maximumOccurringAlphabet = "";
  for (let alphabet in occurrences) {
    if (occurrences[alphabet] > maximumCounter) {
      maximumCounter = occurrences[alphabet];
      maximumOccurringAlphabet = alphabet;
    }
  }

  // Display the result
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = "Occurrences: " + JSON.stringify(occurrences) + "<br>";
  resultElement.innerHTML += "Alphabet with maximum occurrence: " + maximumOccurringAlphabet + "with an occurrence of " + maximumCounter + " times!";
}