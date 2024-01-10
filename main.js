//variables
let producto=0;
let valor=0;
let cuotas=0;

//funciones
function elegirProducto(){
    let seleccionUsuario = prompt("1.Monitor \n 2.Teclado \n 3.Mouse \n 4.Placa de video \n 5.Procesador");
    producto = seleccionUsuario;
    while(seleccionUsuario < 1 || seleccionUsuario > 5){
        alert("Por favor elija un producto de la lista")
        seleccionUsuario = prompt("1.Monitor \n 2.Teclado \n 3.Mouse \n 4.Placa de video \n 5.Procesador")
        producto = seleccionUsuario;
    }
}

function asignarValor(){

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

    alert("el costo es " + valor);
}

function calcularCFT() {

    cuotas = prompt("Elija el numero de cuotas en las que quiere abonar (1, 3 o 6 cuotas)");
    // while(cuotas !== 1 || cuotas !== 3 || cuotas !== 6){
    //     cuotas = prompt("Elija el numero de cuotas en las que quiere abonar (1, 3 o 6 cuotas)");
    // }

    if (cuotas == 1){
        valorCuota = valor*0.79;
        alert("Abonar en efectivo le bonifica un 21%, su valor a pagar sera: " + valorCuota);
    }
    else if (cuotas == 3){
        valorCuota = valor*1.5;
        alert("El precio de su cuota sera: " + valorCuota + " (CFT 150%)");
    }
    else if (cuotas == 6){
        valorCuota = valor*1.65;
        alert("El precio de su cuota sera: " + valorCuota + " (CFT 165%)");
    }
}

alert ("Bienvenido, por favor seleccione el producto que desea comprar")
elegirProducto();
asignarValor();
calcularCFT();