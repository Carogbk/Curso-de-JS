
// CLASES
class Productos {
    constructor(id, nombre, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}

class CarritoCompra {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }
    totalCompra() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
    }
}

// CATALOGO DE PRODUCTOS
let carrito = new CarritoCompra(1);
let catalogoProductos = [];


// PRODUCTOS fuction async - await
let cardsDiv = document.querySelector("#cards");
const obtenerProductos =  async () => {
    const resp = await fetch("./productos.json")
    const data = await resp.json();
    data.forEach(productos => {
        cardsDiv.innerHTML += cardRendered(productos);
        let producto = new Productos(productos.id, productos.nombre, productos.imagen, productos.precio);
        catalogoProductos.push(producto)
        console.log(catalogoProductos)
    })

}


// FUNCIONES
function cardRendered(productos) {
    let cardRendered = `
<div class="cardBox m-3" style="width: 18rem;">
        <img src="./img/productos/${productos.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">$${productos.precio}</p>
            <button onclick="miFunc(${productos.id})" id="${productos.id}" class="btn btn-outline-success botonCompra">Comprar</button>
            </div>
    </div>
    `
    return cardRendered;

}

function miFunc(id) {
    let productoElegido = catalogoProductos.find(productos => productos.id == id);
    carrito.productos.push(productoElegido);
    let compra = document.getElementById("compra");
    compra.innerText = carrito.productos.length;
    renovarStorage();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agrego el producto al carrito ',
        showConfirmButton: false,
        timer: 2000
    })

}
function renovarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


// Cargar carrito existente
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new CarritoCompra(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto)
    })
    console.log(carritoGuardado);
 
    actualizarCarrito(carritoGuardado);
});

// CARRITO DE COMPRAS

obtenerProductos();