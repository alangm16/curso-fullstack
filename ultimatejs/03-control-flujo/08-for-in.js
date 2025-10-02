let user = {
    id: 1,
    name: 'Chancho',
    age: 25,
};

for ( let prop in user) {
    console.log(prop, user[prop]);
}

// Es mejor usar for of
let animales = ['Chancho', 'Dragon', 'Canguro'];
for (let indice in animales ) {
    console.log(indice, animales[indice]);
}