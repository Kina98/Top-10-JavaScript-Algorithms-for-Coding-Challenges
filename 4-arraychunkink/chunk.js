// Étant donné un tableau et la taille d'un bloc, diviser le tableau en plusieurs sous-ensembles
// où chaque sous-réseau a une longueur de taille

function chunk(array, size) {
    const result = [];
    let index = 0;
    while(index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 3));