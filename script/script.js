console.dir(document)


const body = document.getElementById("body")


body.addEventListener("submit", (event) => {
    event.preventDefault()
} )


function ocultar() {
    const btnOcultar = document.getElementById("headerNav");
    if (btnOcultar.style.display === "none") {
      btnOcultar.style.display = "flex";
    } else {
      btnOcultar.style.display = "none";
    }
}




/* Main */

const contenedorCardioHTML = document.getElementById("contenedorCardio")

const contenedorYogaHTML = document.getElementById("contenedorYoga")

const contenedorFuerzaHTML = document.getElementById("contenedorFuerza")

fetch("./database/dbproductos.json")
.then(response => response.json())
.then(data => {

    for(const producto of data){

        if (producto.mostrar) {
            if(producto.categoria == "cardio"){
                contenedorCardioHTML.innerHTML += `
                    <div class="card">
                        <img src="./images/${producto.image}" alt="img">
                        <h2> ${producto.nombre}</h2>
                        <br>
                        <a class="btn-producto" href="../contenido.html?id=${producto.id}">Detalles</a>
                    </div>
                `

            }else if(producto.categoria == "yoga"){
                contenedorYogaHTML.innerHTML += `
                    <div class="card">
                        <img src="./images/${producto.image}" alt="img">
                        <h2> ${producto.nombre}</h2>
                        <br>
                        <a class="btn-producto" href="../contenido.html?id=${producto.id}">Detalles</a>
                    </div>
                `

            }else if(producto.categoria == "fuerza"){
                contenedorFuerzaHTML.innerHTML += `
                    <div class="card">
                        <img src="./images/${producto.image}" alt="img">
                        <h2> ${producto.nombre}</h2>
                        <br>
                        <a class="btn-producto" href="../contenido.html?id=${producto.id}">Detalles</a>
                    </div>
                `

            }
            
        }
    }   
})


const formulario = document.querySelector("#formulario")
const usuarios = []
formulario.addEventListener("submit", (event)=>{
    event.preventDefault() //previene la recarga de la pagina
    usuarios.push({
        nombre: formulario.nombre.value, //capturo el valor de nombre
        mail: formulario.mail.value,
        mensaje: formulario.mensaje.value
    })
    formulario.reset()
})



