function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      document.getElementById('checkButton').click(); // Simulate button click
    }
}

function findSmallAndLargeNumber() {
    let numberOne = parseInt(document.getElementById("inputNumberOne").value.trim());
    let numberTwo = parseInt(document.getElementById("inputNumberTwo").value.trim());
    let numberThree = parseInt(document.getElementById("inputNumberThree").value.trim()); 
    
    let smallestNumber = Math.min(numberOne, numberTwo, numberThree);
    let largestNumber = Math.max(numberOne, numberTwo, numberThree);
            
    document.getElementById("result").innerHTML = "The smallest number is: '" + smallestNumber + "'<br>The largest number is: '" + largestNumber +"'";
    
}