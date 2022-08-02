const contenedorComentario = document.getElementById("comentarios")
function obtenerComentario(){
    fetch ("https://jsonplaceholder.typicode.com/comments")
    .then( (response) => {
        console.log(response);
        return response.json();
    
        
    })
    .then( (data) =>{
        console.log(data);
        console.log(data[0].body);
        data.forEach((comentario)=>{
            let columna = document.createElement("div")
            columna.className= "col-md-3"
            columna.innerHTML=`<p>${comentario}</p>`
            contenedorComentario.appendChild("columna")
        })
        
    });
    
}
obtenerComentario();
// CLASES
class Productos{
    constructor(id, nombre, imagen, precio){
        this.id=id;
        this.nombre=nombre;
        this.imagen=imagen;
        this.precio=precio;
    }
}

class CarritoCompra {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }
    totalCompra(){
        let total=0;
        for(let i = 0; i < this.productos.length; i++){
            total= total + this.productos[i].precio;
        }
        return total;
    }
}

// CATALOGO DE PRODUCTOS

let catalogoProductos = [];

let producto1= new Productos(1, "pelota1", "producto1.jpg", 3000);
let producto2= new Productos(2, "pelota2", "producto2.jpg", 4000);
let producto3= new Productos(3, "pelota3", "producto3.jpg", 5000);
let producto4= new Productos(4, "pelota4", "producto4.jpg", 5000);
let producto5= new Productos(5, "pelota5", "producto5.jpg", 5000);
let producto6= new Productos(6, "pelota6", "producto6.jpg", 5000);
let producto7= new Productos(7, "pelota7", "producto7.jpg", 5000);
let producto8= new Productos(8, "pelota8", "producto8.jpg", 5000);
let producto9= new Productos(9, "pelota9", "producto9.jpg", 5000);
let producto10= new Productos(10, "pelota10", "producto10.jpg", 5000);

catalogoProductos.push(producto1);
catalogoProductos.push(producto2);
catalogoProductos.push(producto3);
catalogoProductos.push(producto4);
catalogoProductos.push(producto5);
catalogoProductos.push(producto6);
catalogoProductos.push(producto7);
catalogoProductos.push(producto8);
catalogoProductos.push(producto9);
catalogoProductos.push(producto10);

// PRODUCTOS
let cardsDiv = document.querySelector("#cards");

catalogoProductos.forEach(productos => {
    cardsDiv.innerHTML += cardRendered(productos);
})

// FUNCIONES
function cardRendered(productos){
    let cardRendered = `
<div class="cardBox m-3" style="width: 18rem;">
        <img src="./img/productos/${productos.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${productos.nombre}</h5>
            <p class="card-text">$${productos.precio}</p>
            <button onclick="miFunc()" id="${productos.id}" class="btn btn-outline-success botonCompra">Comprar</button>
        </div>
    </div>
    `
    return cardRendered;
    
}
function miFunc() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has agregado el producto al carrito ',
        showConfirmButton: false,
        timer: 2500
    })

}
function finalizarCompra() {
    Swal.fire({
        title: 'Antes de finalizar la compra recordá registrar tu usuario',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

}

function limpiarCarrito(){
    let divCarrito= document.querySelector("#carrito");
    divCarrito.innerHTML="";
}

function actualizarCarrito(carrito){
    let divCarrito= document.querySelector("#carrito");
    carrito.productos.forEach(producto =>{
        divCarrito.innerHTML += cardRendered(producto);
    })
    divCarrito.innerHTML += `<h2>Precio Total $ ${carrito.totalCompra()}</h2> `
}

function renovarStorage(){
    localStorage.removeItem("carrito");
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito existente
window.addEventListener('DOMContentLoaded',(e)=>{
    let storage = JSON.parse(localStorage.getItem("carrito"));
    let carritoGuardado = new CarritoCompra(storage.id,storage.productos);
    storage.productos.forEach(producto=>{
        carritoGuardado.productos.push(producto)
    })
    console.log(carritoGuardado);
    limpiarCarrito();
    actualizarCarrito(carritoGuardado);
});

// CARRITO DE COMPRAS

let carrito = new CarritoCompra (1);

let botones = document.querySelectorAll(".botonCompra")
let arrayBoton = Array.from(botones);
arrayBoton.forEach(boton => {
boton.addEventListener("click", (e)=>{
    productoElegido = catalogoProductos.find(productos => productos.id == e.target.id);
    carrito.productos.push(productoElegido);
    console.log(carrito);
    console.log(carrito.totalCompra());
    limpiarCarrito();
    actualizarCarrito(carrito);
    renovarStorage();
  
})
})



















// // console.dir(document)
// let div= document.getElementById("app");
// let parrafo= document.getElementById("parrafo1");

// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

// let listaContenedores = document.getElementsByClassName("contenedor-ejemplo")
// console.log(listaContenedores)

// for(const elemento of listaContenedores){
//     console.log(elemento.innerHTML)
// }



// class Usuario {
//     constructor(nombre, mail, persona, edad){
//     this.nombre = nombre
//     this.mail = mail
//     this.persona = persona
//     this.edad= edad
// }
// }
// let usuarios = []
// function registrarUsuario(){
//     let cantUsuarios = parseInt(prompt("En el caso de que sea una compra grupal, por cuantas personas tendriamos que dividir el monto total?"))

//     for(index=0;index < cantUsuarios; index++){
//         let nombre = prompt ("Ingrese su nombre completo")
//         let mail = prompt ("Ingrese su correo electronico")
//         let persona = prompt ("A nombre de quien iría esta factura?")
//         let edad = parseInt(prompt("Cual es tu edad?"))

//         let usuarioRegistrado = new Usuario(nombre, mail, persona, edad)

//         usuarios.push(usuarioRegistrado)
//     }
//     console.log(usuarios)
// }
// function buscarCliente(){
//     let nombreCliente= prompt("A que cliente buscas?")
//     const resultado = usuarios.find((el) => el.nombre === nombreCliente)
//     if (resultado !== undefined) {
//         alert("A quien va dirigida esta factura es: " + resultado.nombre + " Enviar vía mail al correo: " + resultado.mail)
//     } else {
//         alert('No existe')
//     }
// }
// function main(){
//     registrarUsuario()
// }
// main()

// let cantidadDeProductos = 0
// function compra(entrada) {
//     while (entrada !== "no") {
//         let categ = ["1.Decoracion", "2.Uso Personal", "3.No lo tengo definido"]
//         let productos = prompt("Hola, que categoria estas buscando?" + categ.join(", "))
//         addProductos(productos)
//         entrada = prompt("Desea continuar con la compra?")
//     }
//     let suma = 0
//     let montoAPagar = 0
//     for (let i = 1; i <= cantidadDeProductos; i++) {
//         let precio = parseFloat(prompt("Ingrese el precio del " + i))
//         suma = suma + precio
//     }
//     alert("Gracias por su compra, añadiste al carrito=" + cantidadDeProductos + "" + "productos" + "" + "" + "su total a pagar es:" + "$" + suma)
//     let formaDePago = ["1.Tarjeta de Débito", "2.Tarjeta de Crédito"]
//     let medioDePago = prompt("Como desea abonar:"+ formaDePago.join("  O "))
//     if (medioDePago == 1) {
//         alert("Te enviaremos el link de pago a continuación a tu mail")
//     } else if (medioDePago == 2) {
//         let cantidadCuotas = prompt("En cuantas cuotas queres hacerlo: \n1.2 cuotas  \n2.3 cuotas \n3. 6 cuotas ")
//         let precioFinal = sumaFinal(suma, cantidadCuotas)
//         alert("El precio de cada cuota es : $ " + precioFinal)
//     }
// }
// function addProductos(productos) {
//     switch (productos) {
//         case "1":
//             let decoracion = prompt("1.Repisa $2.000,  \n2.Espejo $3.000  \n3.Maceta $1.000");
//             if (decoracion == 1) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Repisa $2.000")
//             } else if (decoracion == 2) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Espejo $3.000")
//             } else if (decoracion == 3) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Maceta $1.000")
//             } else {
//                 alert("No seleccionastes ninguna opcion")
//             }
//             break;
//         case "2":
//             let usoPersonal = prompt("1.Neceser $500 \n2.Mochila $3.000 \n3.Reloj $2.000");
//             if (usoPersonal == 1) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Neceser $500")
//             } else if (usoPersonal == 2) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Mochila $3.000")
//             } else if (usoPersonal == 3) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Reloj $2.000")
//             } else {
//                 alert("No seleccionaste ninguna opcion")
//             }
//             break;
//         case "3":
//             let addDecoracion = ["1.Repisa $2.000",  "2.Espejo $3.000",  "3.Maceta $1.000"]
//             let addUsoPersonal=["4.Neceser $500", "5.Mochila $3.000", "6.Reloj $2.000"]
//             let tercerOpcion = addDecoracion.concat(addUsoPersonal).join(", ")
//             let noDefinido= prompt(tercerOpcion)
//             if (noDefinido == 1) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Repisa $2.000")
//             } else if (noDefinido == 2) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Espejo $3.000")
//             } else if (noDefinido == 3) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Maceta $1.000")
//             } else if (noDefinido == 4) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Neceser $500")
//             } else if (noDefinido == 5) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Mochila $3.000")
//             } else if (noDefinido == 6) {
//                 cantidadDeProductos += 1
//                 alert("Se añadio al carrito Reloj $2.000")
//             } else {
//                 alert("No seleccionaste ninguna opcion")
//             }
//             break;
//     }
// }
// function sumaFinal(suma, cantidadCuotas){
//     return suma / cantidadCuotas
// }
// let entrada = prompt("Quieres hacer una compra?")
// compra(entrada)
// buscarCliente()


// function ProductoStock (nombre, precio, cantidad){
//     this.nombre = nombre
//     this.precio= precio
//     this.cantidad= cantidad
//     this.presentacion = function(){console.log("Este producto cuesta "+this.precio + " El stock del mismo es:" + this.cantidad + " Unidades")}
//     this.disminuirStock = (disminuir) => this.cantidad -= disminuir
// }

// const repisa= new ProductoStock ("Repisa", "$2.000", 5);
// const espejo= new ProductoStock ("Espejo", "$3.000", 8);
// const maceta= new ProductoStock ("Maceta", "$1.000", 10);
// repisa.disminuirStock(2)
// espejo.disminuirStock(3)

// repisa.presentacion();
// espejo.presentacion();
// maceta.presentacion();



// console.log (repisa);
// console.log (espejo);
// console.log (maceta);

// repisa.cantidad = 3
// espejo.cantidad = 5
// console.log("Nueva cantidad repisas"+ repisa.cantidad)
// console.log("Nueva cantidad de espejo"+ espejo.cantidad)


// class UsoPersonal {
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//         this.vendido = false
//     }
//     presentacion(){
//         console.log("Este producto cuesta "+this.precio + " El stock del mismo es:" + this.cantidad + " Unidades")
//     }
//     aumertarStock(aumentar){
//         this.cantidad += aumentar
//     }
//     productoVendido(){
//         this.vendido = true
//     }
// }
// let usoPersonal = new UsoPersonal("Neceser", "$500", 20)
// let usoPersonal1 = new UsoPersonal("Mochila", "$3.000", 10)
// let usoPersonal2 = new UsoPersonal("Reloj", "$2.000", 5)
// usoPersonal.presentacion();
// usoPersonal1.presentacion();
// usoPersonal2.presentacion();

// const productosDeco = [
//     {id: 1, producto: "repisa"},
//     {id: 2, producto: "espejo"},
//     {id: 3, producto: "maceta"}
// ]

// for (const productosD of productosDeco){
//     console.log(productosD.id);
//     console.log(productosD.producto);
// }
