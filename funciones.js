let stockProductos = [
  { id: 1,nombre: "Taza",tipo: "taza",cantidad: 10,precio: 900,img: "../fotos2/mug-dali 1.png" },
  { id: 2,nombre: "Remera",tipo: "Remera",cantidad: 10,precio: 3500,img: "../fotos2/remera 1.png" },
  { id: 3,nombre: "Poster",tipo: "Poster",cantidad: 10,precio: 2000,img: "../fotos2/poster 1.png" },
  { id: 4,nombre: "Gorro",tipo: "Vicera",cantidad: 10,precio: 2200,img: "../fotos2/gorro 1.png" },
  { id: 5,nombre: "LLavero",tipo: "Llavero",cantidad: 10,precio: 1200,img: "../fotos2/llavero 1.png" },
  { id: 6,nombre: "Reloj",tipo: "Reloj",cantidad: 10,precio: 4000,img: "../fotos2/reloj 1.png" },
  { id: 7,nombre: "Gorro",tipo: "Vicera",cantidad: 10,precio: 2200,img: "../fotos2/gorro 1.png" },
  { id: 8,nombre: "Remera",tipo: "Remera",cantidad: 10,precio: 3500,img: "../fotos2/remera 1.png"},
 
]

function relojActualizable () {
  const currentTime = () => {
      const idTime = document.querySelector (`#reloj`);
      const date = new Date ();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds(); 

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

let carritoDeCompras = []


const contenedorProductos = document.getElementById('contenedorProducto');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioTotal = document.getElementById('precioTotal');

const guardarDatos = (clave,valor) => localStorage.setItem(clave,valor)

mostrarProductos();

function mostrarProductos() {
  contenedorProductos.innerHTML = ''
  stockProductos.forEach(item => {
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `<div id="muestras" class="card shadow-sm" style="width: 18rem;">
    <img class=" fotos w-30" src=" ${item.img}" alt=""> 
    <h4 id="nombre">${item.nombre}</h4>  
    <h5 id="precio">$${item.precio}</h5>         
    <div class="card-body">
        <p class="card-text">Productos de exposicion.</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
        <button id="btnComprar ${item.id}" type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>
        </div>`
    contenedorProductos.appendChild(div);
    let agregarProducto = document.getElementById(`btnComprar ${item.id}`);
    agregarProducto.addEventListener('click',() => {
      agregarCarrito(item.id)
      console.log(agregarProducto);
    })
  })
}

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
  guardarDatos("listadoDeProductos", JSON.stringify(carritoDeCompras))
}

function mostrarCarrito(agregarItem) {
  let div = document.createElement('div')
  div.className = 'productoCarrito'
  div.innerHTML = `<p>${agregarItem.nombre}</p>
                    <p>$${agregarItem.precio}</p>
                    <p id="cant${agregarItem.id}">cantidad: ${agregarItem.cantidad}</p>
                    <button class="boton-eliminar" id="eliminar" data-id=${agregarItem.id}>
                    <iconify-icon icon="bi:trash"></iconify-icon>
                    </button>`
  contenedorCarrito.appendChild(div)

  let btnEliminar = document.getElementsByClassName('boton-eliminar')
  for (const btn of btnEliminar) {
    btn.addEventListener('click',(e) => {
      btn.parentElement.remove();
      guardarDatos("listadoDeProductos", JSON.stringify(carritoDeCompras))

     
      carritoDeCompras = carritoDeCompras.filter(item => item.id != e.target.parentElement.dataset.id)
      console.log(carritoDeCompras);
      actualizarCarrito()
    })
  }

}



function actualizarCarrito() {
  contadorCarrito.innerText = carritoDeCompras.reduce((acc,el) => acc + el.cantidad,0)
  precioTotal.innerText = carritoDeCompras.reduce((acc,el) => acc + (el.precio * el.cantidad),0)
}

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