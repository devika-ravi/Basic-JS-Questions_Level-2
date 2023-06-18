function findASCIIValue() {
    let stringInput = document.getElementById("string").value;

    resultElement = document.getElementById("result");
    resultElement.innerHTML = "ASCII value of String Characters of the string you entered: <br>"
    
    for (let i = 0 ; i < stringInput.length ; i++) {
        resultElement.innerHTML += stringInput.charAt(i) + " = " + stringInput.charCodeAt(i) + "<br>";
    }
}