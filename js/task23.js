function deleteAllConsonants() {
  let string = document.getElementById("inputString").value;

  let consonantsRegularExpression = /[bcdfghjklmnpqrstvwxyz]/gi;

  //Or can be written as:
  //--------------------
  // let consonantsRegularExpression = /[^aeiou\s,.!?\d$]/gi; // Regular expression to match consonants
  // //^ negation, /s any white space, /d any digit

  let consonantsRemovedString = string.replace(consonantsRegularExpression, "");

  document.getElementById("result").innerHTML = "The string after removing all the consonants: " + consonantsRemovedString;
}