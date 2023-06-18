function checkIfPrefix() {
    let string = document.getElementById("inputString").value;
    let subString = document.getElementById("inputSubString").value;
    resultElement = document.getElementById("result");

    isStringPrefix = string.startsWith(subString);

    (isStringPrefix===true) ? resultElement.innerHTML = "Yes, it is!" : resultElement.innerHTML = "No,it is not";
}