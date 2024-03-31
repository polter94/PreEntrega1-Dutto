//OBJETO 'productos'
let productos = [
    {id: 1, nombre: "Anillo", precio: 3500},
    {id: 2, nombre: "Dije anillo", precio: 2500},
    {id: 3, nombre: "Dije cuadrado", precio: 5000},
    {id: 4, nombre: "Dije cuadrado XL", precio: 1500},
    {id: 5, nombre: "Dije gota", precio: 9000},
    {id: 6, nombre: "Dije #", precio: 4000}
]

//CARRITO vacio
const almacCarrito = [];

//CONSTRUCTOR de la lista de productos
let cards = document.getElementById("listaProd");

// funcion para agregar por botones " agregar() "
const agregar = (id) => {
    // alert(`el producto seleccionado es ${id}`)

    let producto = productos.find((item) => item.id === id);
    almacCarrito.push(producto);
}

//CONSTRUCTOR de la tienda
productos.forEach((item) => {
    let div = document.createElement("div");
    div.className = "producto-card";
    div.innerHTML = `
    <img src="./img/productos/${item.id}.png" alt="" class="producto-img">
    <p>${item.nombre}</p>
    <p id="precio">$ ${item.precio}</p>
    <button type="button" class="btn-comprar" id="boton${item.id}">Agregar al carrito</button>
    `;

    cards.append(div);

    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
});



//CONSTRUCTOR del carrito - asignar clase cont-carrito
let carrito = document.createElement("div");
carrito.innerHTML = "<h2>carrito</h2>"
carrito.className = "cont-carrito";

let contCarrito = document.getElementById("carrito");
contCarrito.append(carrito);



//FUNCION para abrir y cerrar CARRITO desde BOTON
const paginaColapsable = document.querySelector("#contenedorColapsable");
const botonColapsar = document.querySelector("#btnCarrito")

function colapsar() {
    if (article.className == "cont-general-abierto") {
        //cerrar
        article.className = "cont-general-cerrado";
        botonColapsar.innerHTML = "Abrir carrito";
    } else {
        //cerrar
        article.className = "cont-general-abierto";
        botonColapsar.innerHTML = "Cerrar carrito";
    }
}




//  FUNCION para cambiar ${precio} por 'sin stock'
// TODO

//  FUNCION para identificar el boton 'comprar' que se presiono
// TODO
// const btnComprar = document.querySelectorAll(".btn-comprar");