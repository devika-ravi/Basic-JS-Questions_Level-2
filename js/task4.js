function concatTwoStrings() {
    let fstring = document.getElementById("fstring").value;
    let sstring = document.getElementById("sstring").value;
    
    document.getElementById("result").innerHTML = fstring.concat(sstring);
}