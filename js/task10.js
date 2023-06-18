function printStringLengthUsingFunction() { 
    let stringInput = document.getElementById("string").value;

    document.getElementById("resultOne").innerHTML = stringInput.length ;
}

function printStringLengthWithoutUsingFunction(){
    let stringInput = document.getElementById("string").value;

    let counter = 0;

    //for of loop -> for (variable of iterable)
    for (variable of stringInput) {
        counter++;
        console.log("Counter for variable " + variable + ": " + counter)
    }

    document.getElementById("resultTwo").innerHTML = counter ;
}

// //Another way to print string length without built-in length function is:
// //----------------------------------------------------------------------

// function printStringLengthWithoutUsingFunction(){
//     let stringInput = document.getElementById("string").value;

//     let count = 0;
//     let index = 0;
    
//     while (stringInput[index] !== undefined) {
//       count++;
//       index++;
//     }
    
//     document.getElementById("resultTwo").innerHTML = count ;
//   }