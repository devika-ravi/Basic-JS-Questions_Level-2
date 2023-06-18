function reverseCase() { 
    let stringInput = document.getElementById("string").value;
    let resultElement = document.getElementById("result");
    
    if (stringInput == stringInput.toUpperCase()) {
        resultElement.innerHTML = stringInput.toLowerCase();
    } else if (stringInput == stringInput.toLowerCase()) {
        resultElement.innerHTML = stringInput.toUpperCase();
    } else {
        resultElement.innerHTML = "Enter a string of the same case (Either UpperCase/LowerCase)!!"
    }
}

