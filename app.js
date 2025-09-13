let amigos = [];
let yaSorteado = [];

function agregarAmigo() {
    //creamos variable para obtenes los datos y despues agregarlos con push a nuestra cadena
    let addAmigo = document.getElementById("amigo").value.trim();
    const soloLetras = /^[a-zA-Z\s]+$/; //Esto es parte del metodo RegExp para campos o rastrar cosas de Arrays

    //agregamos amigos a lista, limpiamos pantalla y mandamos mostrarNotificacion
    if (addAmigo === "") {
        mostrarNotificacion("Por favor, inserta un nombre.");
    } else if (!soloLetras.test(addAmigo)) {
        mostrarNotificacion("Este campo solo admite letras minusculas y mayusuculas");
        document.getElementById("amigo").value = "";
    } else if (amigos.includes(addAmigo)) {
        document.getElementById("amigo").value = "";
        mostrarNotificacion("Ese nombre ya fue agregado, ingresa un nombre nuevo.");
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
        mostrarNotificacion("No hay amigos suficientes para sortear");
        return;
    }

    if (yaSorteado.length === amigos.length) {
        mostrarNotificacion("Ya se sortearon todos los amigos posibles");
        return;
    }

    let amigoSorteado;

    do {
        let amigoRandom = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[amigoRandom];
    } while (yaSorteado.includes(amigoSorteado));

    yaSorteado.push(amigoSorteado);

    document.getElementById("resultado").innerHTML = `Tu amigo sorteado es: 🎉${amigoSorteado}🎉`;

    crearConfetti(); 
    draw();
    
    return;
}

// Funcionalidad de Confeti
const canvas = document.getElementById("confetti-canvas");
const contexto = canvas.getContext("2d"); //esto nos hace que s epueda dibujar en el formato de 2d
let confetti = [];
const numConfetti = 300;
const coloresConfetti = [
            '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
            '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50',
            '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800'
            ];

// Confrima que el canvas ocupe la ventana completa
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function crearConfetti(){
    for (let i = 0; i < numConfetti; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height, // Empieza arriba
            r: Math.random() * 6 + 2, // Radio
            d: Math.random() * numConfetti, // Desplazamiento
            color: coloresConfetti[Math.floor(Math.random() * coloresConfetti.length)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngle: 0
        });
    }
}

function draw() {
    contexto.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas
    confetti.forEach(c => {
        contexto.beginPath();
        contexto.lineWidth = c.r;
        contexto.strokeStyle = c.color;
        contexto.moveTo(c.x + c.tilt + c.tiltAngle, c.y);
        contexto.lineTo(c.x + c.tilt, c.y + c.d / 2);
        contexto.stroke();
    });
    update();
    requestAnimationFrame(draw);
}

function update() {
    let restanteConfetti = [];
    confetti.forEach(c => {
        c.y += c.d;
        c.tiltAngle += 0.1;

        if (c.y <= canvas.height) {
            restanteConfetti.push(c);
        }
    });
    confetti = restanteConfetti;

    if (confetti.length === 0) {
        crearConfetti();
    }
}

// Funcion para mostrar mostrarNotificacionas de manera más profesional
function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById("miNotificacion");
    notificacion.textContent = mensaje;
    notificacion.classList.add("show");

    // Oculta la notificación despues de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove("show");
    }, 3000);
}

// Funcion reiniciar el juego

function reiniciar(){
    document.getElementById("amigo").value = ""; //ocupamos value porque se usa para formularios, inpust y selects
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = ""; //ocupamos innerHTML porque s eusa para div, listas y spans

    amigos = [];
    yaSorteado = [];
    }