function findLastCharacter() {
    let stringInput = document.getElementById("string").value;

    document.getElementById("result").innerHTML = 'Last character of the string you entered is given inside " ": <br>"' + stringInput.charAt((stringInput.length)-1)+ '".';
}      
