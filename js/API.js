/* 
link: https://rickandmortyapi.com/api/

Ha través de esta API, escribir en pantalla del navegador la frase plantilla:
"Hola mi nombre es Rick Sanchez, mi especie es Human, soy originario de Earth (C-137)"

Que el usuario interesado a través de un 'prompt' pueda pedir diferentes id's.

2020 @ Tibor Kopca
*/

'use strict'

//Creamos las bases, para acceder a la API, que esta en una dirección determinada
const API_URL = 'https://rickandmortyapi.com/api/'       
const CHARACTER_URL = 'character/:id'           //"1"       
const ORIGIN_URL = 'origin/:id'                 //"Earth(C-137)"
//const SPECIES_URL = 'character/:species'        //"Human"

// Varias opciones, dentro de la función get creada por jQuery, crossDomain nos permite definir que los datos no estan en local
const OPCIONES = { crossDomain: true }

//FUNCTIONS
const printPERSONAJE = function (personaje) { // se convertira en un Callback, al convertirse en un argumento de otra función
    document.write(`Hola mi nombre es ${personaje.name}, mi especie es ${personaje.species}, soy originario de ${personaje.origin.name}.${"<br></br>"}`)
}

// llamamos a la libreria jQuery y a su función get
// printPERSONAJE == Callback
// get, va a ser el encargado de llamar a la función PERSONAJE
// si el request no funciona, ó no devuelve los datos, nuestra función de Callback, nunca se ejecutará y eso es bueno
function returnData(id) {
    const URL = `${API_URL}${CHARACTER_URL.replace(':id', id)}`
    $.get(URL, OPCIONES, printPERSONAJE);           //pasamos URL a la funccion printPERSONAJE
}

function peticion() { //Peticion devuelve el input de usuario
    //Peticion
    var peticion = prompt("Entra un numero para obtener informacion sobre el character");
    if (peticion) {
        // document.write(`La suma es`);
        return peticion
    } else {
        document.write('Adios!');
    }
}
//LLAMAMOS MAIN
returnData(peticion)



