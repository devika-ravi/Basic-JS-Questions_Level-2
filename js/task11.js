function printFirstIndexOfSpecifiedCharacter() { 
    let stringInput = document.getElementById("string").value;
    let specifiedCharacter = document.getElementById("specifiedCharacter").value;
    
    let index = stringInput.indexOf(specifiedCharacter);    //this gives a value '-1' if the specified character is not present in the string.

    if (index !== -1) {
        document.getElementById("resultOne").innerHTML = "The specified character is present in the index '" + index + "' the 1st time";
    } else {
        document.getElementById("resultOne").innerHTML = "The specified character is NOT present in the string you entered";
    }   
}

function printIndexesOfSpecifiedCharacter() {
    let stringInput = document.getElementById("string").value;
    let specifiedCharacter = document.getElementById("specifiedCharacter").value;

    let indexes = ""; //Initialized an empty array
    
    for (let i = 0; i < stringInput.length ; i++) {
        if (stringInput.charAt(i) === specifiedCharacter) {
            indexes = indexes + i + "<br>";
        }
    }

    if (indexes > 0) {
        document.getElementById("resultTwo").innerHTML = "The specified character is present in indexes:<br>" + indexes;
    } else {
        document.getElementById("resultOne").innerHTML = "The specified character is NOT present in the string you entered";
    }
}

////Another method
////--------------
// function printIndexesOfSpecifiedCharacter() {
//     let stringInput = document.getElementById("string").value;
//     let specifiedCharacter = document.getElementById("specifiedCharacter").value;

//     let indexes = []; //Initialized an empty array
    
//     let index = stringInput.indexOf(specifiedCharacter);

//     while (index !== -1){
//         indexes.push(index);
//         index = stringInput.indexOf(specifiedCharacter, index+1);   //find 1st index from index+1
//     }

//     if (indexes.length > 0) {
//         document.getElementById("resultTwo").innerHTML = "The specified character is present in indexes '" + indexes.join(",") + "'";
//     } else {
//         document.getElementById("resultOne").innerHTML = "The specified character is NOT present in the string you entered";
//     }   
// }