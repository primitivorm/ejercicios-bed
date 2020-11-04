/* 
2. Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de
n+(n+1)+(n+2)+...+m. Por ejemplo si los numeros son 3 y 6 la respuesta debe ser 18
que es el resultado de 3+4+5+6.
*/

const sum = (a, b) => {
    if(a < 0) {
        throw new Error('first number must be positive');
    }
    if(b < 0){
        throw new Error('second number must be positive');
    }
    if (a > b){
       a, b = b, a;  
    }
    let sum = 0;
    for(let i=a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

export default sum;