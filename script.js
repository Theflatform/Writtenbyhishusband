function MostrarCarta() {
    var texto = document.getElementById("texto-carta");
    texto.style.display = "block";
}

function crearCorazon() {
    var corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤";

    corazon.style.left = "0px";
    corazon.style.top = Math.random() * 100 + "%";

    document.querySelector(".cartita-bonita").appendChild(corazon);

    setTimeout(function() {
        corazon.remove();
    }, 4000);
}

setInterval(crearCorazon, 300);
