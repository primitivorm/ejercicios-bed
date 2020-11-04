/*
5. Dada una cadena de paréntesis y corchetes escribe una función que regresa si la
cadena está bien balanceada, es decir, por cada paréntesis o corchete que abre hay uno
al mismo nivel que que cierra. Por ejemplo si recibe ‘([])’ o ‘[()[]]’ tiene que regresar true y
si recibe ‘([)]’ tiene que regresar false.
*/

const isBalanced = (str) => {
    const open_list = ['[', '('];
    const close_list = [']', ')'];
    const stack = [];
    for(let i=0; i < str.length; i++){
        let c = str[i];
        if(open_list.includes(c)){
            stack.push(c)
        } else if(close_list.includes(c)){
            let pos = close_list.indexOf(c);
            if(stack.length > 0 && (open_list[pos] == stack[stack.length-1])){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if(stack.length == 0){
        return true;
    }
    return false;
}

export default isBalanced;