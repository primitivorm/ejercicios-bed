/*
3. Dado un arreglo de números desordenado y un entero k, escribe una función que
encuentre el k-ésimo elemento más grande. Por ejemplo si el arreglo es [7,2,5,9,8,3] y k
es 2 debe regresar 8.
*/

const kesimo = (arr, k) => {
    let multiples = [];
    for (const item of arr) {
        if(item % k == 0){
            multiples.push(item);
        } 
    }
    const sorted = multiples.sort();
    return sorted[sorted.length - 1];
} 

export default kesimo;