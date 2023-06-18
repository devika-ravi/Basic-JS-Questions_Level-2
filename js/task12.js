function checkOccurence() { 
    let string = document.getElementById("inputString").value;
    let stringCharacter = document.getElementById("inputStringCharacter").value;
    
    let counter = 0;

    for (let i = 0 ; i < string.length ; i++) {
        if (string.charAt(i) === stringCharacter){
            counter++;
        }
    }

    if (counter > 0) {
        document.getElementById("result").innerHTML = "The given character is occured " + counter + " times in the string";
    } else {
        document.getElementById("result").innerHTML = "The given character is NOT found in the string!";
    }

}