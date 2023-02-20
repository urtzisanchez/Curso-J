const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const img = document.querySelectorAll(".seccion")


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando un parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        //const elemento_fantasma = document.querySelector(".imagen-fantasma")
        const img = new Image();
        img.src = "images.jpeg"
        event.dataTransfer.setDragImage(img, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})



secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
       event.preventDefault()
       event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

img.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
       event.preventDefault()
       event.dataTransfer.dropEffect = "copy"
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove("parrafo")
    })
})

