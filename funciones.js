//Declaracion de productos
/*let stockProductos = [
  { id: 1,nombre: "Funko",tipo: "Muñeco",cantidad: 10,precio: 3500,img: "../fotos3/funko.jpg" },
  { id: 2,nombre: "Reloj pulsera",tipo: "Reloj pulsera",cantidad: 10,precio: 3500,img:"../fotos3/reloj2.jpg"},
  { id: 3,nombre: "Taza",tipo: "taza",cantidad: 10,precio: 900,img: "../fotos3/mug-dali 1.png" },
  { id: 4,nombre: "Remera",tipo: "Remera",cantidad: 10,precio: 3500,img: "../fotos3/remera 1.png" },
  { id: 5,nombre: "Poster",tipo: "Poster",cantidad: 10,precio: 2000,img: "../fotos3/poster 1.png" },
  { id: 6,nombre: "Gorro",tipo: "Vicera",cantidad: 10,precio: 2200,img: "../fotos3/gorro 1.png" },
  { id: 7,nombre: "LLavero",tipo: "Llavero",cantidad: 10,precio: 1200,img: "../fotos3/llavero 1.png" },
  { id: 8,nombre: "Reloj",tipo: "Reloj",cantidad: 10,precio: 4000,img: "../fotos3/reloj 1.png" },
 
 ]*/

let stockProductos = []
 //Prueba de incorporar reloj al header
function relojActualizable () {
  const currentTime = () => {
      const idTime = document.querySelector (`#reloj`);
      const date = new Date ();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds(); 

// Operadores avanzados

      hh = hh < 10 ? `0${hh}` : hh;
      mm = mm < 10 ? `0${mm}` : mm;
      ss = ss < 10 ? `0${ss}` : ss;

      let time = `${hh}:${mm}:${ss}`;

      idTime.innerText =  time ;
  }
  currentTime ();
  setInterval(currentTime, 1000);
};

relojActualizable();
//Declaracion de arrays y funciones
let carritoDeCompras = []


const contenedorProductos = document.getElementById('contenedorProducto');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioTotal = document.getElementById('precioTotal');

const comprar =  document.getElementsByClassName(`btn btn-primary`);

const cerrar = document.getElementsByClassName(`btn btn-secondary`);

const guardarDatos = (clave,valor) => localStorage.setItem(clave,valor)

//mostrarProductos();

//Incorporar las cards al html con estilos de css propios de boostrap (faltan modificar algunos estilos para que sea mas presentable)//
// Utilizacion de operadores avanzados en la desestructuracion de productos a partir solamente del nombre, precio, img y id//
function mostrarProductos() {
 
  contenedorProductos.innerHTML = ''
  stockProductos.forEach(item => {
    const { img, id, nombre, precio }= item 
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `<div id="muestras" class="card shadow-sm" style="width: 18rem;">
    <img class=" fotos w-30" src=" ${img}" alt=""> 
    <h4 id="nombre">${nombre}</h4>  
    <h5 id="precio">$${precio}</h5>         
    <div class="card-body">
        <p class="card-text">Productos de exposicion.</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
        <button id="btnComprar ${id}" type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>
        </div>`
    contenedorProductos.appendChild(div);
    let agregarProducto = document.getElementById(`btnComprar ${id}`);
    agregarProducto.addEventListener('click',() => {
      agregarCarrito(id)
      console.log(agregarProducto);

      //Incorporacion de libreria Tostify
      Toastify({
        text: "Producto agregado al carrito",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();
    })
  })
}
fetch('../productos json')

.then(res => res.json)

.then(data => {
  stockProductos = [...data]
  mostrarProductos() })

 
//Funcion de carrito de compras
function agregarCarrito(id) {
  let existencia = carritoDeCompras.find(produc => produc.id == id)
  if (existencia) {
    existencia.cantidad = existencia.cantidad + 1;
    document.getElementById(`cant${existencia.id}`).innerHTML = `<p id="cant${existencia.id}">cantidad: ${existencia.cantidad}</p>`
    actualizarCarrito()
  } else {
    let agregarItem = stockProductos.find(items => items.id == id)
    agregarItem.cantidad = 1
    carritoDeCompras.push(agregarItem);
    mostrarCarrito(agregarItem);
    actualizarCarrito()

    
    
  }
  //Incorporacion de Json
  guardarDatos("listadoDeProductos", JSON.stringify(carritoDeCompras))
}

function mostrarCarrito(agregarItem){ 
  let div = document.createElement('div')
  div.className = 'productoCarrito'
  div.innerHTML = `<p>${agregarItem.nombre}</p>
                    <p>$${agregarItem.precio}</p>
                    <p id="cant${agregarItem.id}">cantidad: ${agregarItem.cantidad}</p>
                    <button class="boton-eliminar" id="eliminar" data-id=${agregarItem.id}>
                    <iconify-icon icon="bi:trash"></iconify-icon>
                    </button>`
  contenedorCarrito.appendChild(div)
//Boton de eliminar del carrito, pero falta revisasr para que borre de a 1 elemento
  let btnEliminar = document.getElementsByClassName('boton-eliminar')
  for (const btn of btnEliminar) {
    btn.addEventListener('click',(e) => {
      btn.parentElement.remove();
     //Incorporacion de libreria Tostify
      Toastify({
        text: "Producto eliminado",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast();

      
      
      

     
      carritoDeCompras = carritoDeCompras.filter(item => item.id != e.target.parentElement.dataset.id)
      console.log(carritoDeCompras);
      actualizarCarrito()
      guardarDatos("listadoDeProductos", JSON.stringify(carritoDeCompras))
    })
  }

}


//Funcion de actualizar el carrito
function actualizarCarrito() {
  contadorCarrito.innerText = carritoDeCompras.reduce((acc,el) => acc + el.cantidad,0)
  precioTotal.innerText = carritoDeCompras.reduce((acc,el) => acc + (el.precio * el.cantidad),0)
}
//Funcion de Json localStorage
function recuperarProductos(){
  let productosRecuperados= JSON.parse(localStorage.getItem("listadoDeProductos"));
  if(productosRecuperados){
    productosRecuperados.forEach(produc =>{
      mostrarCarrito(produc) 
      carritoDeCompras.push(produc)
      actualizarCarrito()
    })
  }
}
recuperarProductos();
document.getElementById("BtnComprar").onclick = () =>{
  Swal.fire(
    'Excelente!',
    'Procedemos con la compra!',
    'success'
  )
}
// Agregado de libreria Sweet Alert2 para el boton de cancelar compras!!
document.getElementById("BtnCancelar").onclick = () =>{
  Swal.fire({
    icon: 'error',
    title: 'Seguro?',
    text: 'Procedemos a cancelar la compra',
    
  })}

  