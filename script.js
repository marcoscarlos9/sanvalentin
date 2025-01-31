function mostrarInvitacion() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("invitacion").style.display = "block";
}

// Si dice "Sí" ❤️
function respuestaSi() {
    document.getElementById("invitacion").style.display = "none";
    document.getElementById("mensaje-final").style.display = "block";
}

// Si intenta hacer clic en "No", el botón se mueve 😆
function moverBotonNo() {
    let botonNo = document.querySelector(".no");
    botonNo.style.position = "absolute";
    botonNo.style.left = Math.random() * (window.innerWidth - 100) + "px";
    botonNo.style.top = Math.random() * (window.innerHeight - 100) + "px";
}

// 🌹 Animación de rosas cayendo
function crearRosa() {
    const rosa = document.createElement("img");
    rosa.src = "C:/Users/HP/Desktop/SANVALENTIN/amar.png";
    rosa.classList.add("rosa");
    rosa.style.left = Math.random() * window.innerWidth + "px";
    rosa.style.animationDuration = Math.random() * 4 + 2 + "s";
    document.body.appendChild(rosa);

    setTimeout(() => {
        rosa.remove();
    }, 9000);
}
function enviarConfirmacion() {
    let numero = "51930743166"; // Tu número de WhatsApp sin el "+"
    let mensaje = " ¡Sí, acepto ser tu San Valentín! %0A%0AEstoy muy emocionada por nuestra cita. %0A%0A";
    let url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, "_blank");
}



setInterval(crearRosa, 100);
