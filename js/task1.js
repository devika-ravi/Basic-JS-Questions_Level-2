function checkPalindrome() {
    let string = document.getElementById('inputString').value;
    let result = document.getElementById('result');

    let reversedString = string.split('').reverse().join('');

    if (string === reversedString) {
      result.textContent = string + ' is a palindrome string.';
    } else {
      result.textContent = string + ' is not a palindrome string.';
    }
  }