
// Actividad 1

function TextStrings(parms) {
    let trimMod = parms.trim()
    console.log(trimMod)
    console.log(parms)
    let valores = trimMod.length > 0
    console.log(valores)

}
TextStrings(" ")
TextStrings("QCY")


function mostrar() {
    var nombres = "Fede 1 ;Fede 2; Maximiliano ; Maximiliano2 ";
    console.log(nombres);
    var expresionRegular = /\s*;\s*/;
    var listaNombres = nombres.split(expresionRegular);
    console.log(listaNombres);
}
mostrar()

function VecesA(cadena, caracter) {
    var indices = [];
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter) indices.push(i);
    }
    return indices.length;
}

var coincidencias = VecesA("Almacen", "a");
console.log(coincidencias)



//                Actividad 2



let primario = "Maximiliano"; 
console.log(primario);
primario = "Maximiliano" + " Correa";
console.log(primario);

let array = ["Array", "array2"];
console.log(array);
let nuevoArray = array;
nuevoArray = ["hola", "hola"];
console.log(nuevoArray);



//                  Actividad 3

let peliculas = [

    {
        titulo: "Maleficio",
        id: 1,
        duracion: 111
    }
    , {
        titulo: "La casa bajo el agua",
        id: 2,
        duracion: 85

    },
    {
        titulo: "Umma",
        id: 3,
        duracion: 83
    },
    {
        titulo: "Viejos",
        id: 4,
        duracion: 108
    },
    {
        titulo: "La Médium",
        id: 5,
        duracion: 131
    },
    {
        titulo: "Screem 5",
        id: 6,
        duracion: 114
    }

]

//Buscar una pelicula a base de la id

function buscar() {

    const resultado = peliculas.find(peli => peli.id === 3);
    console.log(resultado);
}
buscar()

//Filtrado de peliculas

const result = peliculas.filter(duracion => duracion.duracion < 120);

console.log(result)

// Creando un nuevo array con map para poner solo el nombre de la peli

var arrayModificada = peliculas.map(function (obj) {
    var rObj = {};
    rObj = obj.titulo;
    console.log(rObj)
});

// iterando atravez de forEach para mostrar unicamente la duracion de la peli


function mostrarDuracion(pelicula, i) {
    console.log(`Duracion: ${pelicula.duracion} `)
        ;
}

peliculas.forEach((pelicula, i) => mostrarDuracion(pelicula, i));


// Actividad 4 Contador de vocales iteracion.

function contarVocales(texto) {
    let contadorVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let i = 0; i < texto.length; ++i) {
        if (vocales.indexOf(texto[i]) >= 0) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

console.log(contarVocales('Hola Como Estas?'));

// Actividad 5 DOM

let img = document.getElementById("padre").children[2];

console.log(img)

let padre2 = document.getElementById("padre").children[0].innerHTML = "Parrafo 1"
let padre = document.getElementById("padre").children[1].innerHTML = "Parrafo 2"

document.append(padre)



