const imgDiv = document.createElement("div");
document.body.appendChild(imgDiv);
imgDiv.className = "div-container"

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(data => {
    data.results.forEach(result => {
        const imageTag = document.createElement("img");
        imageTag.src = result.image;
        imageTag.className = "img-char";
        imgDiv.appendChild(imageTag);
    }).catch(error => console.error(error, "No se pudo cargar el archivo"));
})
