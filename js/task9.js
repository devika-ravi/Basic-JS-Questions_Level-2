function printStringCharacter() {
    let stringInput = document.getElementById("string").value;

    resultElement = document.getElementById("result");
    resultElement.innerHTML = "Characters of the strings you entered are: <br>"
    
    for (let i = 0 ; i < stringInput.length ; i++) {
        resultElement.innerHTML += (i+1) + ".  " + stringInput.charAt(i) + "<br>";
    }
}