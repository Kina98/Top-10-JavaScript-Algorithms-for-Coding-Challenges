// --- Directions
// Étant donné une chaîne de caractères, retourner 
// true si la chaîne est un palindrome
//  ou false si ce n'est pas le cas.  
// Les palindromes sont des chaînes de caractères qui
//  forment le même mot si elles sont inversées.

// --- Examples:
//   palindrome("laval") === true
//   palindrome("codingmoney") === false  //yenomgnidoc

function palindrome(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed;

    // on peut aussi faire
    // if (str === reversed) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(palindrome('madam'));