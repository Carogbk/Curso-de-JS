
let cantidadDeProductos=0
let entrada= prompt("Quieres hacer una compra?")
while(entrada !== "no")  {
    let productos= prompt("Hola, que categoria estas buscando? \n1.Decoracion \n2.Uso Personal \n3.No lo tengo decidido")
    switch (productos){
        case "1": 
            let decoracion= prompt("1.Repisa $2.000  \n2.Espejo $3.000  \n3.Maceta $1.000");
            if (decoracion==1){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Repisa $2.000")
            }
            else if (decoracion==2){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Espejo $3.000")
            }
            else if (decoracion==3){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Maceta $1.000")  
            }else{
                alert("No seleccionastes ninguna opcion")
            }
        break;
        case "2": 
            let usoPersonal= prompt("1.Neceser $500 \n2.Mochila $3.000 \n3.Reloj $2.000");
            if(usoPersonal==1){
                cantidadDeProductos +=1
            alert("Se añadio al carrito Neceser $500")
        }
            else if(usoPersonal==2){
                cantidadDeProductos +=1
            alert("Se añadio al carrito Mochila $3.000")  
        }
        else if(usoPersonal==3){
            cantidadDeProductos +=1
            alert("Se añadio al carrito Reloj $2.000") 
            }else{
                alert("No seleccionaste ninguna opcion")
            }
        break;
        case "3": 
            let noDefinido=prompt("1.Repisa $2.000  \n2.Espejo $3.000  \n3.Maceta $1.000 \n4.Neceser  $500  \n5.Mochila $3.000 \n6.Reloj $2.000");
            if(noDefinido==1){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Repisa $2.000")
            }
                else if(noDefinido==2){
                    cantidadDeProductos +=1
                alert("Se añadio al carrito Espejo $3.000")  
            }
            else if(noDefinido==3){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Maceta $1.000") 
                }
            else if(noDefinido==4){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Neceser $500") 
                }
            else if(noDefinido==5){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Mochila $3.000") 
                }
            else if(noDefinido==6){
                cantidadDeProductos +=1
                alert("Se añadio al carrito Reloj $2.000") 
                }else{
                alert("No seleccionaste ninguna opcion")
                }
        break;
}
    entrada= prompt("Desea continuar con la compra?")
    
}
let suma=0
let montoAPagar=0
for(let i=1; i <=cantidadDeProductos;i++){
    let precio= parseFloat(prompt("Ingrese el precio del " + i))
    suma= suma + precio
}
alert("Gracias por su compra, añadiste al carrito="+cantidadDeProductos+""+"productos" + ""+ ""+"su total a pagar es:" + "$"+ suma)

let medioDePago=prompt("Como desea abonar: \n1.Tarjeta de Débito  \n2.Tarjeta de Crédito ")
if(medioDePago==1){
    alert("Te enviaremos el link de pago a continuación a tu mail")
}
else if (medioDePago==2){
    let cantidadCuotas=prompt("En cuantas cuotas queres hacerlo: \n1.2 cuotas  \n2.3 cuotas \n3. 6 cuotas ")
    let precioFinal= suma / cantidadCuotas
    alert("El precio de cada cuota es : $"+ precioFinal)
}



