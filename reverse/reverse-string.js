// On donne une chaine de caractre et on renvoie son inverse

function reverse(str) {
    const strToArray = str.split('');

    strToArray.reverse();

    return strToArray.join('');

    // en une ligne: return str.split('').reverse().join('');
}

console.log(reverse('loccoLedoC'));

// Autre methode
// function reverse(str) {
//     let reversed = '';
    
//     for (let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }