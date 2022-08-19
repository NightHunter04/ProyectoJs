/*lass Souvenir {
    constructor(id,nombre,stock,precio) {
        this.id = id;
        this.nombre= nombre;
        this.stock = stock;
        this.precio = precio;
    }
  }
  
  
  let souvenir1 = new Souvenir(1,"Taza",10,500)
  let souvenir2 = new Souvenir(2,"Remera",10,3000)
  let souvenir3 = new Souvenir(3,"Poster",10,3000)
  let souvenir4 = new Souvenir(4,"Gorro",10,300)
  let souvenir5 = new Souvenir(5,"Remera",10,700)
  let souvenir6 = new Souvenir(6,"Reloj",10,3000)
  
  let souvenirs = [souvenir1,souvenir2,souvenir3,souvenir4, souvenir5,souvenir6]
  
  let carrito = [];
  
  const mostrarProductos = () => {
    let mensaje = "Elija su producto:"
    souvenirs.forEach(souvenir => {
        mensaje += `
             ${souvenir.id}: ${souvenir.nombre} - Stock: ${souvenir.stock} - $${souvenir.precio}`
    })
    mensaje += `
            Ingrese 0 para no comprar`
    
    let opcion = Number(prompt(mensaje))

    return opcion;
  }
  
  let comprar = true;
  
  while (comprar) {
    let opcion = mostrarProductos()
  
   if (opcion >= 1 && opcion <= 6) {
        let souvenirElegido = souvenirs.find(recuerdo => recuerdo.id === opcion)
        if (carrito.length === 0) {
            souvenirElegido.cantidad = 1;
            souvenirElegido.stock--;
            carrito.push(souvenirElegido)
        } else {
            let souvenirEncarrito = souvenirs.find(recuerdo => recuerdo.id === opcion)
            if (souvenirEncarrito) {
                souvenirEncarrito.cantidad++;
                souvenirEncarrito.stock--;
                if (souvenirEncarrito.stock === 0) {
                    souvenirs = souvenirs.filter(recuerdo => recuerdo.id != opcion)
                }souvenirElegido
                souvenirElegido.cantidad = 1;
                souvenirElegido.stock--;
                carrito.push(souvenirElegido)
  
            }
        }
    } else {
        comprar = false;
    }
  }
  
  const mostrarTotalCarrito = () => {
    let mensajeCarrito = "";
    if (carrito.length > 0) {
        carrito.forEach(recuerdo=> {
            mensajeCarrito += `
                Marca: ${recuerdo.marca} - Cantidad: ${recuerdo.cantidad} - Total: $${recuerdo.cantidad * recuerdo.precio}
            `
        })
        mensajeCarrito += `Total Carrito: ${carrito.reduce((total,recuerdo) => total + (recuerdo.precio * recuerdo.cantidad),0)}`
        alert(mensajeCarrito)
    } else {
        mensajeCarrito += 'No hay productos en el carrito'
        alert(mensajeCarrito)
    }
  }
  
  mostrarTotalCarrito()*/
  

 // const contenedorProductos = document.getElementById('cuerpo');


  