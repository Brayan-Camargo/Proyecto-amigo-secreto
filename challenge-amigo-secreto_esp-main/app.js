// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    //creamos variable para obtenes los datos y despues agregarlos con push a nuestra cadena
    let addAmigo = document.getElementById("amigo").value.trim();

    //agregamos amigos a lista, limpiamos pantalla y mandamos alert
    if (addAmigo === "") {
        alert("Por favor, inserta un nombre.");
    } else if(amigos.includes(addAmigo)) {
        document.getElementById("amigo").value = "";
        alert("Ese nombre ya fue agregado, ingresa un nombre nuevo.");
    } else {
        amigos.push(addAmigo);
        document.getElementById("amigo").value = "";
        console.log(addAmigo);
        console.log(amigos);
        lista();
    }
}

function lista() {
    //Haremos que la lista se muestre en la pagina y se limpie al final
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        mostrarLista.appendChild(li);
    }
}