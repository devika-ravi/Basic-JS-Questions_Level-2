function findFirstCharacter() {
    let stringInput = document.getElementById("string").value;
    
    document.getElementById("result").innerHTML = 'First character of the string you entered is given inside " ": <br>"' + stringInput.charAt(0) + '".';
}
