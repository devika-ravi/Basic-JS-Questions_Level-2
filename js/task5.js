function convertByteToString() {
    let byteSeparatedByCommas = document.getElementById("byteSeparatedByCommas").value;
    let byteArray = byteSeparatedByCommas.split(",").map(Number); 
    /* Working of the above line:  
       -------------------------
       -Converted the byte separated by commas string to an array using split method
       -Made each array element a number using map method.
       -.map(Number) & .map(parseInt) both are correct here
    */

    let stringFromByte = String.fromCharCode(...byteArray);
    /* ... (spread operator):
        It allows you to spread the elements of an array or an iterable (such as a string) into individual elements.
    */

    document.getElementById("result").innerHTML = stringFromByte;
    
}