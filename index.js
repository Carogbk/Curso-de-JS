class Usuario {
    constructor(nombre, mail, persona, edad){
    this.nombre = nombre
    this.mail = mail
    this.persona = persona
    this.edad= edad
}
}
let usuarios = []
function registrarUsuario(){
    let cantUsuarios = parseInt(prompt("En el caso de que sea una compra grupal, por cuantas personas tendriamos que dividir el monto total?"))
 
    for(index=0;index < cantUsuarios; index++){
        let nombre = prompt ("Ingrese su nombre completo")
        let mail = prompt ("Ingrese su correo electronico")
        let persona = prompt ("A nombre de quien iría esta factura?")
        let edad = parseInt(prompt("Cual es tu edad?"))

        let usuarioRegistrado = new Usuario(nombre, mail, persona, edad)

        usuarios.push(usuarioRegistrado)
    }
    console.log(usuarios)
}
function buscarCliente(){
    let nombreCliente= prompt("A que cliente buscas?")
    const resultado = usuarios.find((el) => el.nombre === nombreCliente)
    if (resultado !== undefined) {
        alert("A quien va dirigida esta factura es: " + resultado.nombre + " Enviar vía mail al correo: " + resultado.mail)
    } else {
        alert('No existe')
    }
}
function main(){
    registrarUsuario()
}
main()

let cantidadDeProductos = 0
function compra(entrada) {
    while (entrada !== "no") {
        let categ = ["1.Decoracion", "2.Uso Personal", "3.No lo tengo definido"]
        let productos = prompt("Hola, que categoria estas buscando?" + categ.join(", "))
        addProductos(productos)
        entrada = prompt("Desea continuar con la compra?")
    }
    let suma = 0
    let montoAPagar = 0
    for (let i = 1; i <= cantidadDeProductos; i++) {
        let precio = parseFloat(prompt("Ingrese el precio del " + i))
        suma = suma + precio
    }
    alert("Gracias por su compra, añadiste al carrito=" + cantidadDeProductos + "" + "productos" + "" + "" + "su total a pagar es:" + "$" + suma)
    let formaDePago = ["1.Tarjeta de Débito", "2.Tarjeta de Crédito"]
    let medioDePago = prompt("Como desea abonar:"+ formaDePago.join("  O "))
    if (medioDePago == 1) {
        alert("Te enviaremos el link de pago a continuación a tu mail")
    } else if (medioDePago == 2) {
        let cantidadCuotas = prompt("En cuantas cuotas queres hacerlo: \n1.2 cuotas  \n2.3 cuotas \n3. 6 cuotas ")
        let precioFinal = sumaFinal(suma, cantidadCuotas)
        alert("El precio de cada cuota es : $ " + precioFinal)
    }
}
function addProductos(productos) {
    switch (productos) {
        case "1":
            let decoracion = prompt("1.Repisa $2.000,  \n2.Espejo $3.000  \n3.Maceta $1.000");
            if (decoracion == 1) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Repisa $2.000")
            } else if (decoracion == 2) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Espejo $3.000")
            } else if (decoracion == 3) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Maceta $1.000")
            } else {
                alert("No seleccionastes ninguna opcion")
            }
            break;
        case "2":
            let usoPersonal = prompt("1.Neceser $500 \n2.Mochila $3.000 \n3.Reloj $2.000");
            if (usoPersonal == 1) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Neceser $500")
            } else if (usoPersonal == 2) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Mochila $3.000")
            } else if (usoPersonal == 3) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Reloj $2.000")
            } else {
                alert("No seleccionaste ninguna opcion")
            }
            break;
        case "3":
            let addDecoracion = ["1.Repisa $2.000",  "2.Espejo $3.000",  "3.Maceta $1.000"]
            let addUsoPersonal=["4.Neceser $500", "5.Mochila $3.000", "6.Reloj $2.000"]
            let tercerOpcion = addDecoracion.concat(addUsoPersonal).join(", ")
            let noDefinido= prompt(tercerOpcion)
            if (noDefinido == 1) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Repisa $2.000")
            } else if (noDefinido == 2) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Espejo $3.000")
            } else if (noDefinido == 3) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Maceta $1.000")
            } else if (noDefinido == 4) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Neceser $500")
            } else if (noDefinido == 5) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Mochila $3.000")
            } else if (noDefinido == 6) {
                cantidadDeProductos += 1
                alert("Se añadio al carrito Reloj $2.000")
            } else {
                alert("No seleccionaste ninguna opcion")
            }
            break;
    }
}
function sumaFinal(suma, cantidadCuotas){
    return suma / cantidadCuotas
}
let entrada = prompt("Quieres hacer una compra?")
compra(entrada)
buscarCliente()


function ProductoStock (nombre, precio, cantidad){
    this.nombre = nombre
    this.precio= precio
    this.cantidad= cantidad
    this.presentacion = function(){console.log("Este producto cuesta "+this.precio + " El stock del mismo es:" + this.cantidad + " Unidades")}
    this.disminuirStock = (disminuir) => this.cantidad -= disminuir
}

const repisa= new ProductoStock ("Repisa", "$2.000", 5);
const espejo= new ProductoStock ("Espejo", "$3.000", 8);
const maceta= new ProductoStock ("Maceta", "$1.000", 10);
repisa.disminuirStock(2)
espejo.disminuirStock(3)

repisa.presentacion();
espejo.presentacion();
maceta.presentacion();



console.log (repisa);
console.log (espejo);
console.log (maceta);

repisa.cantidad = 3
espejo.cantidad = 5
console.log("Nueva cantidad repisas"+ repisa.cantidad)
console.log("Nueva cantidad de espejo"+ espejo.cantidad)


class UsoPersonal {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.vendido = false
    }
    presentacion(){
        console.log("Este producto cuesta "+this.precio + " El stock del mismo es:" + this.cantidad + " Unidades")
    }
    aumertarStock(aumentar){
        this.cantidad += aumentar
    }
    productoVendido(){
        this.vendido = true
    }
}
let usoPersonal = new UsoPersonal("Neceser", "$500", 20)
let usoPersonal1 = new UsoPersonal("Mochila", "$3.000", 10)
let usoPersonal2 = new UsoPersonal("Reloj", "$2.000", 5)
usoPersonal.presentacion();
usoPersonal1.presentacion();
usoPersonal2.presentacion();

const productosDeco = [
    {id: 1, producto: "repisa"},
    {id: 2, producto: "espejo"},
    {id: 3, producto: "maceta"}
]

for (const productosD of productosDeco){
    console.log(productosD.id);
    console.log(productosD.producto);
}
