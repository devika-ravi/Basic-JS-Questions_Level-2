function replacePalindromeWordWithStar() {

  let string = document.getElementById("inputString").value;
  outputString = "";
    
  let wordsArray = string.split(" ");

  for (let i = 0; i < wordsArray.length; i++) {
    console.log("i = " + i)
    let word = wordsArray[i];
    console.log("word = " + word)

    if (isPalindrome(word)) {
      outputString += "*".repeat(word.length);
      console.log ("output string if palidrome : " + outputString)
    } else {
      outputString += word;
      console.log ("output string if NOT palidrome : " + outputString)
    }

    if (i < wordsArray.length - 1) {
      outputString += " ";  //for adding space between words
      console.log ("End output string: " + outputString)
    }
  }

  document.getElementById("result").innerHTML = outputString; 
}

  function isPalindrome(word) {
    console.log ("word : " + word)
    let reversedWord = word.split("").reverse().join('');
    console.log ("reversedword : " + reversedWord)

    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }