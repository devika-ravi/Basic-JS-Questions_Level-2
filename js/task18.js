function countConsonants$Vowels() {
  let string = document.getElementById("inputString").value;
  string = string.toLowerCase();

  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0 ; i < string.length ; i++) {
    let character = string.charAt(i);

    if (character.test[/a-z/]){ //if true
      if (character === a || character === e || character === i || character === o || character === u) {
        vowelCount++;
      } else {
        consonantCount++ ;
      }
    }
  }

  document.getElementById("result").innerHTML = "Consonant Count = " + consonantCount + "<br>Vowel Count = " + vowelCount;
}