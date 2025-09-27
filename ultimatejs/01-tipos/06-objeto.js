// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: nombre,
    anime: anime,
    edad: edad
}

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;
personaje['edad'] = 16;
console.log(personaje.edad);

delete personaje.anime;
console.log(personaje);