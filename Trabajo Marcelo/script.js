import datos from "./users.json" assert{type:"json"}

let parrafo = document.getElementById("prueba");

// parrafo.innerText = `${datos[2].name.first} ${datos[2].name.last}`;

window.addEventListener("load", () => {
    const container = document.getElementById("cards-container");
    const cards = document.getElementById("card");

    datos.forEach(dato => {
        const card = cards.cloneNode(true);
        
        card.querySelector("#numero-persona").textContent = `${dato.name.first} ${dato.name.last}`
        card.querySelector("#card-nombre").textContent = `Nombre: ${dato.name.first}`;
        card.querySelector("#card-apellido").textContent = `Apellido: ${dato.name.last}`;
        card.querySelector("#card-ubicacion").textContent = `Ubicacion: ${dato.location.city}`;

        container.appendChild(card);
    })
})