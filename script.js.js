let carrito = []
let total = 0

function cerrarPopup(){

document.getElementById("popup").style.display="none"

}

function guardarDatos(){

alert("Datos guardados correctamente")

cerrarPopup()

}

function agregarCarrito(nombre,precio){

carrito.push({nombre,precio})

total += precio

actualizarCarrito()

}

function actualizarCarrito(){

let lista = document.getElementById("lista-carrito")

lista.innerHTML=""

carrito.forEach(producto=>{

let li = document.createElement("li")

li.textContent = producto.nombre + " $" + producto.precio

lista.appendChild(li)

})

document.getElementById("contador").textContent = carrito.length

document.getElementById("total").textContent = total

}

function abrirCarrito(){

document.getElementById("carrito").style.display="block"

}

function cerrarCarrito(){

document.getElementById("carrito").style.display="none"

}

function buscarProducto(){

let input = document.getElementById("buscador").value.toLowerCase()

let productos = document.querySelectorAll(".producto")

productos.forEach(producto=>{

let texto = producto.innerText.toLowerCase()

producto.style.display = texto.includes(input) ? "block" : "none"

})

}

function comprar(){

alert("Aquí conectaremos pagos con tarjeta, Apple Pay y OXXO")

}
