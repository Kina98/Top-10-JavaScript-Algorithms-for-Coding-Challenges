// on prend un nombre et on return son inverse

function revInt(n) {
    let intStr = n.toString();
    let reversed = '';
    for (const i of intStr) {
        reversed = i + reversed;
    }
    return parseInt(reversed) * Math.sign(n);
}

console.log(revInt(-4202));


// autre maniere
// function reverse(n) {
//     const reversed = n.toString().split('').reverse().join('');

//     return reversed;
// }

// console.log(reverse(4202));
