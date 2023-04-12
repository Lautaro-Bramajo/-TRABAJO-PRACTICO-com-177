
console.dir(document)

const fecha = new Date();
const hoyDia = fecha.getDay();
const hoyMes = fecha.getMonth() + 1;
const hoyAño = fecha.getFullYear();

const fechaActual = hoyDia + "/" + hoyMes + "/" + hoyAño

const formulario = document.querySelector("#formulario")
const usuarios = []
formulario.addEventListener("submit", (event)=>{
    event.preventDefault()
    usuarios.push({
        nombre: formulario.nombre.value,
        mail: formulario.mail.value,
        mensaje: formulario.mensaje.value
    })
    const contenido = "Nombre: " + formulario.nombre.value + "\n" + "Email: " + formulario.mail.value + "\n" + "Mensaje: " + formulario.mensaje.value
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = formulario.nombre.value  + "(" + fechaActual + ").txt";
    a.click();
    URL.revokeObjectURL(url);
    formulario.reset()
})

