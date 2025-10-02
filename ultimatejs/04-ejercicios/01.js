function cualEsMayor ( a, b ) 
{
    /* if ( a > b ) 
    {
        console.log('A es mayor que B');
    }
    else
    {
        console.log('B es mayor que A');
    } */

    return ( a > b ) ? a : b;
}

let mayor = cualEsMayor(10,5);

console.log(mayor);