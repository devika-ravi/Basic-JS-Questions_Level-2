function findLastCharacter() {
    let stringInput = document.getElementById("string").value;
    
    if(stringInput.length % 2 == 0) {
        document.getElementById("result").innerHTML = "The string you entered has no perfect middle!" ;
    } else {
        let middlePosition = Math.floor (stringInput.length / 2);
        document.getElementById("result").innerHTML = 'Last character of the string you entered is given inside " ": <br>"' + stringInput.charAt(middlePosition) + '".';
    }
}      
