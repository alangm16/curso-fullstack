/**
 * Crear algoritmo que imprima números impares
 */

let i = 0;

while ( i <= 10 ) 
{
    if ( i % 2 == 0) 
    {
        // console.log('Número par ' , i);
    }
    else
    {
        console.log('Numero impar ', i)
    }
    i++;
}

console.log('Fuera del while');

let a = 0;

while ( a <= 10 ) 
{
    if ( a % 2 !== 0 )
    {
        console.log('impar', a );
    } 
    a++;
}