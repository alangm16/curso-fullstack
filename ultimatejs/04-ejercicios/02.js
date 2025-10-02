/**
 * Nombre: ancho x alto
 * 8K 7860 x 4320
 * 4k 3840 X 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */

function nombreResolucion(ancho, alto) {
    let nombre;
    if ( ancho >= 7860 && alto >= 4320 ) {
        nombre = '8K';
    }
    else if ( ancho >= 3840 && alto >= 2160 ) {
        nombre = '4K';
    } 
    else if ( ancho >= 2560 && alto >= 1440 ) {
        nombre = 'WQHD';
    }
    else if ( ancho >= 1920 && alto >= 1080 ) {
        nombre = 'FHD';
    }
    else if ( ancho >= 1280 && alto >= 720 ) {
        nombre = 'HD';
    }
    else {
        nombre = 'falso';
    }
    return nombre;
}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);

// Me quede en 2:43:09
// https://www.youtube.com/watch?v=QoC4RxNIs5M&t=7257s