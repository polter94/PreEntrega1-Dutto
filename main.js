//variables
let producto=0; //se define 0 en caso de que el usuario presione continuar sin ingresar valor en funcion elegirProducto
let valor=0;

//funciones
function elegirProducto(){
    let producto = prompt("1.Monitor \n 2.Teclado \n 3.Mouse \n 4.Placa de video \n 5.Procesador");
    while(producto < 1 || producto > 5){
        alert("Por favor elija un producto de la lista")
        producto = prompt("1.Monitor \n 2.Teclado \n 3.Mouse \n 4.Placa de video \n 5.Procesador")
    }
}

function asignarValor(producto){
    let valor=0;

    if(producto==1){
        valor=65000;
    }
    else if(producto==2){
        valor=25000;
    }
    else if(producto==3){
        valor=20000;
    }
    else if(producto==4){
        valor=250000;
    }
    else if(producto==5){
        valor=170000;
    }

    alert("el costo es ", +valor);
}

// function calcularCFT(cuotas) {
//     if (coutas == 1){
//         alert("Abonar en efectivo le bonifica un 21%, su valor a pagar sera: ", ());
//     }
//     if (coutas == 3){
//         alert("El precio de su cuota sera", (${couta}/3)*1.5);
//     }
//     if (coutas == 6){
//         alert("El precio de su cuota sera", (${couta}/6)*1.75);
//     }
// else
// }

alert ("Bienvenido, por favor seleccione el producto que desea comprar")
elegirProducto();
asignarValor(producto);