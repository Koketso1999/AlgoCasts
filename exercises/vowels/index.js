// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var vowelsCount = 0
    const arrVowel = ['a','e','i','o','u']

    for (let char of str){
        if (arrVowel.includes(char)){
            vowelsCount++
        }
    }
    return vowelsCount;
}

module.exports = vowels;
