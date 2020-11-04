# Ejercicios-BED
Prueba para BED

## Instalación
Ejecutar el comando

```
npm install -g @babel/node @babel/cli @babel/core
npm install
```

## Ejercicios

1. Escribir una función que reciba un arreglo de números y obtenga el subarreglo más
grande en el que cada elemento del subarreglo sea mayor que el anterior. Por ejemplo si
el arreglo es [3,2,5,9,1,3] tiene regresar [2,5,9]

Solución
--- 
Para resolver estre punto note que el arreglo deberia de estar ordenado, por lo cual lo ordeno primero.
Cree dos arreglos para ir metiendo los números mas pequeños y otro para meter los números mas grandes.
Si ambos arreglos tienen misma longitud, agrego el elemento a los mas pequeños, y continuo con el siguiente elemento.
Checho si la longitud de los mayores es menor, se tiene que agregar este elemento a los mayores solo si el valor actual es mayor al ultimo elemento insertado en menores, caso contrario lo agrego a los mas pequeños.

Quitando la complejidad de la ordenacion del arreglo, la complejidad de mi algoritmo es O(n) y la complejidad en espacio tambien es O(n) 


2. Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de
n+(n+1)+(n+2)+...+m. Por ejemplo si los numeros son 3 y 6 la respuesta debe ser 18
que es el resultado de 3+4+5+6.

Solución
--- 
Para este ejemplo lo unico que necesitamos es un ciclo desde el valor menor hasta el valor mayor y realizar la suma de los numeros entre estos dos números.
La complejidad de mi algoritmo es O(n) y la complejidad en espacio tambien es O(n)


3. Dado un arreglo de números desordenado y un entero k, escribe una función que
encuentre el k-ésimo elemento más grande. Por ejemplo si el arreglo es [7,2,5,9,8,3] y k
es 2 debe regresar 8.

Solución
---
Para este ejercicio, recorro el arreglo y si el elemento es modulo de k, lo agrego a un nuevo arreglo, al final solo lo ordeno para obtener el mayor.
Quitando la complejidad de la ordenacion del arreglo, la complejidad de mi algoritmo es O(n) y la complejidad en espacio tambien es O(n)


4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados

Solución
---
Recorro el arreglo y voy agregando los elementos a un nuevo arreglo solo si no existe previamente el elemento en este nuevo arreglo.
La complejidad de mi algoritmo es O(n) y la complejidad en espacio tambien es O(n)


5. Dada una cadena de paréntesis y corchetes escribe una función que regresa si la cadena está bien balanceada, es decir, por cada paréntesis o corchete que abre hay uno al mismo nivel que que cierra. Por ejemplo si recibe ‘([])’ o ‘[()[]]’ tiene que regresar true y
si recibe ‘([)]’ tiene que regresar false.

Solución:
---
Para solucionar este ejemplo utilizo un arreglo como si fuera una pila, si el caracter actual es un corchete que abre o un parentesis que abre lo agrego a la pila, en caso de que sea un parentesis que cierra valido que el ultimo elemento en la pila sea un parentesis que abre, si es un corchete que cierra valido que el ultimo elemento en la pila sea un corchete que abre, si no coinciden regreso falso, si el ciclo termina, valido que la pila este vacia para regresar true, sino regreso falso.
La complejidad de mi algoritmo es O(n) y la complejidad en espacio tambien es O(n)

6. Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que
acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a
14:00 no puede estar en el mismo salón que una de 12:00 a 15:00. Escribe una función
que encuentre ese número de salones, por ejemplo si tienes clases de 11:00 a 14:00,
12:00 a 15:00 y 14:30 a 16:00 el menor número de salones es 2.

Solución:
---
Para la solucion de este ejercicio, recorro los horarios que estan en una lista, el elemento actual lo comparo con los horarios restantes y si se traslapa con alguno la hora, incremento un contador.
La complejidad de mi algoritmo es O(log n) y la complejidad en espacio tambien es O(log n)

7. Utilizando la herramienta que creas necesaria realiza pruebas unitarias para los
ejercicios anteriores

Solución:

Para mis pruebas unitarias utilizo JEST, por lo cual basta con ejecutar el siguiente comando:

`npm run test`