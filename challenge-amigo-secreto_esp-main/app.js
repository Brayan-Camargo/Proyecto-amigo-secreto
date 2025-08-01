// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //creamos variable para obtenes los datos y despues agregarlos con push a nuestra cadena
    let addAmigo = document.getElementById("amigo").value;

    //agregamos amigos a lista, limpiamos pantalla y mandamos alert
    if (amigos === "") {
        alert("Por favor, inserta un nombre.");
    } else if(amigos.includes(addAmigo)) {
        alert("Ese nombre ya fue agregado, ingresa un nombre nuevo.");
    } else {
    amigos.push(addAmigo);
        document.getElementById("amigo").value = "";
        console.log(addAmigo);
        console.log(amigos);
    }
}

function listaAmigos() {

}