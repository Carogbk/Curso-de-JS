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
let carritoGuardado = new CarritoCompra();
// Cargar carrito existente
window.addEventListener('DOMContentLoaded', (e) => {
    let storage = JSON.parse(localStorage.getItem("carrito"));
    carritoGuardado = new CarritoCompra(storage.id, storage.productos);
    storage.productos.forEach(producto => {
        carritoGuardado.productos.push(producto)
    })
    console.log(carritoGuardado);
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});

// Funciones

function limpiarCarrito() {
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = "";
}

function actualizarCarrito(carrito) {
    let divCarrito = document.querySelector("#carrito");
    carrito.productos.forEach(producto => {
        divCarrito.innerHTML += cardRendered(producto);
    })
    divCarrito.innerHTML += `<h2>Precio Total $ ${carrito.totalCompra()}</h2> `
}

function cardRendered(productos) {
    let cardRendered = `
<div class="cardBox m-3" style="width: 18rem;">
        <img src="./img/productos/${productos.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">$${productos.precio}</p>
            <button onclick="eliminar(${productos.id})"  class="btn btn-outline-danger botonEliminar">Eliminar Artículo X</button>
            </div>
    </div>
    `
    return cardRendered;

}

function finalizarCompra(){
    Swal.fire({
        title: 'Antes de comprar, recorda Iniciar Sesion en tu cuenta',
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })

}

function eliminar(id) {
    console.log(id)
    console.log('productos que voy a elminar: ', carritoGuardado.productos)
    let pos = carritoGuardado.productos.findIndex(x => x.id === id);
    console.log(pos)
    carritoGuardado.productos.splice(pos, 1);
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
    miFunc1();

}

function miFunc1() {
    Swal.fire({
        title: '¿Seguro que queres eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, elimiar'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Se elimino el producto de tu carrito',
            'No te preocupes, podes continuar comprando',
            'success'
        )
        }
    })

}