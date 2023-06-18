function findLargest$SmallestWord() {
  let string = document.getElementById("inputString").value;

  let wordsArray = string.split(" ");  //split string to array at space

  let largestWord = ""; //Initialize largest word
  let smallestWord = wordsArray[0]; //Initialize smallest word (assume first word is the smallest)

  //Iterating over each word in the array
  for (let i = 0; i < wordsArray.length; i++) {
    console.log ("i = " + i)

    let currentWord = wordsArray[i];
    console.log ("currentWord = " + currentWord)

    if (currentWord.length > largestWord.length) {
      largestWord = currentWord;  // Update the largest word if the current word is longer
      console.log ("largestWord = " + largestWord)
    }

    console.log ("currentWord = " + currentWord)

    if (currentWord.length < smallestWord.length) {
      smallestWord = currentWord; // Update the smallest word if the current word is shorter
      console.log ("smallestWord = " + smallestWord)
    }
  }

  document.getElementById("result").innerHTML = "Largest word in the string: " + largestWord + "<br>Smallest word in the string: " + smallestWord;
    
}   