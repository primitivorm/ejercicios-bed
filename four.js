/*
4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados
*/

const myReduce = (arr) => {
    let newArr = [];
    for (const item of arr) {
        if(!newArr.includes(item)) {
            newArr.push(item);
        }
    }
    return newArr;
}

export default myReduce;