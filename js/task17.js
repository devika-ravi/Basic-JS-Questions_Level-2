function countAlphabetsDigits$Symbols() {
    let string = document.getElementById("inputString").value;

    let alphabetCount = 0;
    let digitsCount = 0;
    let symbolsCount = 0;

    for (let i = 0 ; i < string.length ; i++){
        let character = string.charAt(i);

        //Regular expression literal is represented by enclosing the pattern between forward slashes (/pattern/). 
        //Regular expressions are used for pattern matching and manipulation of strings.
        if (character.match(/[a-z]/gi)) {
            alphabetCount++; 
        } else if (character.match(/[0-9]/)) {
            digitsCount++;
        } else {    //If it's neither an alphabet nor a digit
            symbolsCount++;
        }
    }

    document.getElementById("result").innerHTML = 
        "Number of Alphabets present in the string: " + alphabetCount +
        "<br>Number of Digits present in the string: " + digitsCount + 
        "<br>Number of Symbols present in the string: " + symbolsCount;
}