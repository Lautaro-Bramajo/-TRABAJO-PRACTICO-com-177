
console.dir(document)

let url_string = window.location;
let url = new URL(url_string);
let idGET = url.searchParams.get("id");

const tituloHTML = document.getElementById("titulo")






const inicioPagHTML = document.getElementById("inicioPagina")


fetch("./database/dbproductos.json")
.then(response => response.json())
.then(data => {
    inicioPagHTML.innerHTML = ""

    for (const contenidoID of data) {
        if (contenidoID.id == idGET) {
            if(contenidoID.categoria == "cardio"){
                
                tituloHTML.innerHTML += `${contenidoID.nombre}`

                inicioPagHTML.innerHTML += `
                    <div class="contenidoDIV">
                        <h1>Cardio</h1>
                        <br>
                        <h2>Ejercicios de cardio, ¿qué son?</h2>
                        <br>
                        <p>Como su propio nombre indica, los ejercicios cardiovasculares son aquellos que buscan un aumento del ritmo cardiaco <br>con el objetivo de acelerar el metabolismo y favorecer la quema de calorías.<br> Hacerlos de manera regular no solo ayuda a prevenir enfermedades y mantenerte sano,<br> también puede ayudarte a controlar tu peso o mejorar tu Índice de Masa Corporal, entre otras cosas.</p>
                    </div>
                    
                `
            }else if(contenidoID.categoria == "yoga"){

                tituloHTML.innerHTML += `${contenidoID.nombre}`
    
                inicioPagHTML.innerHTML += `
                    <div class="contenidoDIV">
                        <h1>Yoga</h1>
                        <br>
                        <h2>¿Qué es el Yoga?</h2>
                        <br>
                        <p>Aunque la definición de yoga es bastante complicada,<br> diferente según a quién preguntes y mucho más si intentamos resumirla,<br> podríamos definirlo como una práctica o disciplina física, mental y espiritual,<br> para muchos es una herramienta para la mejora del bienestar físico y mental, <br>para otros el yoga representa un camino hacia la espiritualidad o la religiosidad.</p>
                    </div>
                    
                `
            }else if(contenidoID.categoria == "fuerza"){
                
                tituloHTML.innerHTML += `${contenidoID.nombre}`
    
                inicioPagHTML.innerHTML += `
                    <div class="contenidoDIV">
                        <h1>Rutinas de Fuerza Muscular</h1>
                        <br>
                        <h2>Las rutinas de fuerza no son solo para principiantes</h2>
                        <br>
                        <p>Estas rutinas se basan en movimientos básicos y pesados, como pueden ser la sentadilla, el peso muerto, el press de banca o el press militar aunque pueden incluir movimientos de aislamiento accesorios para trabajar los músculos desde todos los ángulos. <br> Los que entrenan sólo para ganar fuerza deben descansar más entre series que los que se ejercitan para desarrollar los músculos. <br>Los powerlifters y los halterófilos suelen reposar cuatro o cinco minutos entre series, mientras que los culturistas le dedican 60 o 90 segundos. <br>Aprovecharéis más los entrenamientos si descansáis sólo lo imprescindible para que la respiración vuelva a su ritmo habitual. <br>Las rutinas de fuerza suelen basarse en el valor de tu «repetición máxima», 1RM. Una 1RM es la máxima resistencia que se puede vencer en una repetición completa. <br>Es de las formas mas utilizadas y simples de valorar la fuerza máxima dinámica de uno o varios grupos musculares. <br>Antes de realizar las rutinas deberías calcular tu 1RM ya que es necesario para saber que pesos usar en cada ejercicio.</p>
                    </div>
                    
                `
            }
        }

        
    }
})



const contenidosHTML = document.getElementById("contenidos")


fetch("./database/dbproductos.json")
.then(response => response.json())
.then(data => {
    contenidosHTML.innerHTML = ""

    for (const contenidoID of data) {

        if (contenidoID.id == idGET) {

            if (contenidoID.repeticiones != "") {

                if (contenidoID.trabaja != "") {
                    contenidosHTML.innerHTML += `
                        <div class="contenidoProducto">
                            <div>
                                <img src="./images/${contenidoID.image}" alt="img">
                            </div>
                            <h2> ${contenidoID.nombre}</h2>
                            <h3>¿Como hacerlo?</h3>
                            <p class="justify">${contenidoID.detalles}</p>
                            <h3>Repeticiones</h3>
                            <p>${contenidoID.repeticiones}</p>
                            <h3>¿Que trabaja?</h3>
                            <p>${contenidoID.trabaja}</p>
                        </div>
                        
                    `
                }else{
                    contenidosHTML.innerHTML += `
                        <div class="contenidoProducto">
                            <div>
                                <img src="./images/${contenidoID.image}" alt="img">
                            </div>
                            <h2> ${contenidoID.nombre}</h2>
                            <h3>¿Como hacerlo?</h3>
                            <p class="justify">${contenidoID.detalles}</p>
                            <h3>Repeticiones</h3>
                            <p>${contenidoID.repeticiones}</p>
                        </div>
                        
                    `
                }  

            }else{

                if (contenidoID.trabaja != "") {
                    contenidosHTML.innerHTML += `
                        <div class="contenidoProducto">
                            <div>
                                <img src="./images/${contenidoID.image}" alt="img">
                            </div>
                            <h2> ${contenidoID.nombre}</h2>
                            <h3>¿Como hacerlo?</h3>
                            <p class="justify">${contenidoID.detalles}</p>
                            <h3>¿Que trabaja?</h3>
                            <p>${contenidoID.trabaja}</p>
                        </div>
                        
                    `
                }else{
                    contenidosHTML.innerHTML += `
                        <div class="contenidoProducto">
                            <div>
                                <img src="./images/${contenidoID.image}" alt="img">
                            </div>
                            <h2> ${contenidoID.nombre}</h2>
                            <h3>¿Como hacerlo?</h3>
                            <p class="justify">${contenidoID.detalles}</p>
                        </div>
                        
                    `
                }

            }
        }
    }
})

