let amigos = [];
let yaSorteado = [];

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
    return;
}

const presionarEnter = document.getElementById("amigo");
presionarEnter.addEventListener("keyup", function(event){ //Keyup se ocupa cuando se suelta la tecla
    if(event.key === "Enter"){
        agregarAmigo();
    }
});

function lista() {
    //Haremos que la lista se muestre en la pagina y se limpie al final
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        mostrarLista.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    //Realizaremos la funcion para sortear de manera pseudoaleatoria el amigo secreto.
    if (amigos.length === 0) {
        alert("No hay amigos suficientes para sortear");
        return;
    }

    if (yaSorteado.length === amigos.length) {
        alert("Ya se sortearon todos los amigos posibles");
        return;
    }

    let amigoSorteado;

    do {
        let amigoRandom = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[amigoRandom];
    } while (yaSorteado.includes(amigoSorteado));

    yaSorteado.push(amigoSorteado);

    document.getElementById("resultado").innerHTML = `Tu amigo sorteado es: 🎉${amigoSorteado}🎉`;

    return;
}

