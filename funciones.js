let stockProductos = [
  {id: 1, nombre: "Taza", tipo: "taza", cantidad :10, precio:900, img:"../fotos2/mug-dali 1.png"},
  {id: 2, nombre: "Remera", tipo: "Remera", cantidad :10, precio:3500, img:"../fotos2/remera 1.png"},
  {id: 3, nombre: "Poster", tipo: "Poster", cantidad :10, precio:2000, img:"../fotos2/poster 1.png"},
  {id: 4, nombre: "Gorro", tipo: "Vicera", cantidad :10, precio:2200, img:"../fotos2/gorro 1.png"},
  {id: 5, nombre: "LLavero", tipo: "Llavero", cantidad :10, precio:1200, img:"../fotos2/llavero 1.png"},
  {id: 6, nombre: "Reloj", tipo: "Reloj", cantidad :10, precio:4000, img:"../fotos2/reloj 1.png"},
]

let carritoDeCompras=[]

const contenedorProductos = document.getElementById('contenedorProducto');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioTotal = document.getElementById('precioTotal');

mostrarProductos();

function mostrarProductos (){
  contenedorProductos.innerHTML=''
  stockProductos.forEach (item => { 
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = `<div class="card shadow-sm">
    <img class=" fotos w-25" src=" ${item.img}" alt=""> 
    <h4 id="nombre">${item.nombre}</h4>  
    <h5 id="precio">$${item.precio}</h5>         
    <div class="card-body">
        <p class="card-text">Super relojes de pared para decorar tu casa.</p>
        <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
        <button id="btnComprar ${item.id}" type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>
        </div>`
        contenedorProductos.appendChild(div);
        let agregarProducto = document.getElementById(`btnComprar ${item.id}`);
        agregarProducto.addEventListener('click',()=> {
        agregarCarrito(item.id)
        console.log (agregarProducto);
  })
    
})
}

function agregarCarrito (id){
  let existencia = carritoDeCompras.find(produc => produc.id == id)
    if (existencia){
        existencia.cantidad = existencia.cantidad + 1;
        document.getElementById(`cant${existencia.id}`).innerHTML = `<p id="cant${existencia.id}">cantidad: ${existencia.cantidad}</p>`
        actualizarCarrito()
    }else {
        let agregarItem = stockProductos.find(items => items.id == id)
        agregarItem.cantidad = 1
        carritoDeCompras.push(agregarItem);
        mostrarCarrito(agregarItem);
        actualizarCarrito()
        

    }
 

function mostrarCarrito (agregarItem){
  let div = document.createElement ('div')
    div.className = 'productoCarrito'
    div.innerHTML = `<p>${agregarItem.nombre}</p>
                    <p>$${agregarItem.precio}</p>
                    <p id="cant${agregarItem.id}">cantidad: ${agregarItem.cantidad}</p>
                    <button class="boton-eliminar" id="eliminar ${agregarItem.id}">
                    <iconify-icon icon="bi:trash"></iconify-icon>
                    </button>`
                    contenedorCarrito.appendChild(div)
                    function eliminar() {
                      let btnEliminar = document.getElementsByClassName('boton-eliminar')
                      for (const btn of btnEliminar) {
                          btn.addEventListener('click',(e)=>{
                              btn.parentElement.remove();
                              carritoDeCompras = carritoDeCompras.filter(item => item.id != e.target.parentElement.id)
                              actualizarCarrito()
                          })
                      }
                  }
       
 function actualizarCarrito(){
contadorCarrito.innerText= carritoDeCompras.length
precioTotal.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.precio,0)
 } 

}
}