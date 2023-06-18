function replaceStringWithAnother() {
    let string = document.getElementById("inputString").value;
    let stringToBeReplaced = document.getElementById("stringToReplace").value;
    let stringToBeReplacedWith = document.getElementById("stringToBeReplacedWith").value;
    
    if(string.includes(stringToBeReplaced)) {
        document.getElementById("result").innerHTML = string.replaceAll(stringToBeReplaced, stringToBeReplacedWith);
    } else {
        document.getElementById("result").innerHTML = "String to be replaced is not found in the string"
    }
    
}