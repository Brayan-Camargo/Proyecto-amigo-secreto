// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //creamos variable para obtenes los datos y despues agregarlos con push a nuestra cadena
    let addAmigo = document.getElementById("amigo").value;

    //agregamos amigos a lista, limpiamos pantalla y mandamos alert
    if (addAmigo != "") {
        amigos.push(addAmigo);
        document.getElementById("amigo").value = "";
        console.log(addAmigo);
        console.log(amigos);
    } else {
        alert("Por favor, inserte un nombre.");
    }
}