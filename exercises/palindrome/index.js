// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



    function palindrome(str) {

  
        const reverseStr = str.split('').reverse().join(''); 
        return reverseStr === str;
      }
      palindrome("A man, a plan, a canal. Panama");
          
      




module.exports = palindrome;
