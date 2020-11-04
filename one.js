/*
1. Escribir una función que reciba un arreglo de números y obtenga el subarreglo más
grande en el que cada elemento del subarreglo sea mayor que el anterior. Por ejemplo si
el arreglo es [3,2,5,9,1,3] tiene regresar [2,5,9]
*/

const arrayBiggest = (arr) => {
    const ordered = arr.sort();
    const small = [];
    const big = [];
    for (let i = 0; i < ordered.length; i++) {
        let current = ordered[i];
        if (small.length === big.length) {
            small.push(current)
            continue;
        }
        if (big.length < small.length) {
            if (current > small[small.length - 1]) {
                big.push(current);
            } else {
                small.push(current);
            }
        }
    }
    return big;
}

export default arrayBiggest;