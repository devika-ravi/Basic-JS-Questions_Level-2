function changeEveryLetter() {
  let string = document.getElementById("inputString").value;

  let changedString = "";

  for (let i = 0; i < string.length ; i++){
    console.log("i = " + i)

    let charCodeAti = string.charCodeAt(i);
    console.log("Char code at i = " + charCodeAti)
    
    let changedCharacter = String.fromCharCode(charCodeAti + 1);
    console.log("Changed character = " + changedCharacter)

    if (changedCharacter === "[") {
      changedCharacter = "A"; //to change Z to A
    } else if (changedCharacter === "{") {
      changedCharacter = "a"; //to change z to a
    }

    changedString += changedCharacter;
    console.log("Changed string at i = " + i + "is: " + changedString)
  }

  document.getElementById("result").innerHTML = changedString;
}