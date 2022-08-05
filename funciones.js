function probarCodigo (){


alert ("Bienvenidos a Dali-Bar");
  let ingreseNombre = prompt ("Ingrese su Nombre");
  let ingreseApellido = prompt ("Ingrese su Apellido");
  let ingreseCodigo = parseInt(prompt("Ingrese 1234 para ingresar"));


while(ingreseNombre == "" || ingreseApellido == ""){
  alert("No ingreso alguno de los datos, por favor ingréselos!");
  ingreseNombre = prompt ("Ingrese su Nombre");
  ingreseApellido = prompt ("Ingrese su Apellido");

}
while( ingreseCodigo != "1234"){
    alert ( "Código Incorrecto, vuelva a ingresar el código");
    ingreseCodigo = parseInt(prompt("Ingrese 1234 para ingresar")); 
  }
  
  if( ingreseCodigo==1234){
   
    alert ("Bienvenido:\n"+(ingreseNombre  )+ " " + (ingreseApellido));
    let seleccion = prompt("Usted desea reservar para cena, cantobar o jam?");
    let ingreseDia = prompt ("Ingrese dia de la reserva: \n Lunes, \n Martes, \n Miercoles, \n Jueves, \n Viernes, \n Sabado");
    let ingreseHorario = parseInt(prompt("Ingrese su Horario \n 20 \n 21 \n 22 \n 23"));
    // let hora = 20 

function reservas(ingreseDia, ingreseHorario){
  var resultado = ingreseDia + ingreseHorario;
  alert ("Su dia de reserva es:  \n" + (ingreseDia) + " a las " + (ingreseHorario));
  console.log(resultado);
  return resultado;
  
}

if(seleccion == "cena"){
  let cena1 = prompt ("Desea resevar para cenar SI o NO?");
  (cena1 == "si");
  console.log (reservas(ingreseDia, ingreseHorario));
}



if(seleccion == "cantobar"){
  let cantobar = prompt ("Desea resevar para cantobar SI o NO?");
  (cantobar == "si");
  console.log (reservas(ingreseDia, ingreseHorario));
}


if(seleccion == "jam"){
  let jam = prompt ("Desea resevar para jam SI o NO?");
  (jam == "si");
  console.log (reservas(ingreseDia, ingreseHorario));
}

if(seleccion == "no"){
  alert("GRACIAS POR VISITARNOS");
}
}
}

class Comida{
  constructor (nombre, ingredientes, vegetales , adicionales) {
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.vegetales = vegetales;
      this.adicionales = adicionales
  }
}



const carta =[];
carta.push (new Comida ("Hamburguesa Clasica", "Pan, medallon de carne", "-", "Cheddar "));
carta.push (new Comida ("Hamburguesa Completa", "Pan, medallon de carne", " lechuga, tomate", " Cheddar, bacon"));
carta.push (new Comida ("Hamburguesa Dali", "Pan de queso", "Doble medallon de carne", "lechuga, tomate confitado, cebolla caramelizada " , "Cheddar, crunchy bacon "));


/*alert ("Menu de Comidas");

const picadas = (" \n Picada Clasica , \n Picada Completa, Picada Dali");

const lomitos = ("\n Lomito Clasico, \n Lomito Completo, \n Lomito Dali,");

const hamburguesas = ("\n Hamburguesa Clasica, \n Hamburguesa Completa, \n Hamburguesa Dali");

let ingreseComida = prompt("Menu de Dali-Bar, ingrese su opcion:  \n Picadas,  \n Lomitos, \n Hamburguesas,  \n Rabas,  \n Papas ")*/


 
 


/*class Hamburguesa {
  constructor (nombre, ingredientes, verduras , adicionales) {
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.verduras = verduras;
      this.adicionales = adicionales
  }
}
const hamburguesa1 = new hamburguesa1 ("Clasica", "Pan, Medallon de carne", "Cheddar,");
const hamburguesa2 = new hamburguesa2 (" Completa", " Pan, Medallon de carne", "Lechuga y Tomate", " Cheddar, Jamon,");
const hamburguesa3 = new hamburguesa3 ("Dali ", "Pan de Queso, 2 medallones de carne", "Lechuga, Tomate Confitado, Cebolla Caramelizada" , "Cheddar, Panceta Crocante");
 console.log (hamburguesa1 ,hamburguesa2 , hamburguesa3)

const hamburguesaClasica = ["Pan","Hamburguesa","Cheddar" ]; 
console.log (hamburguesaClasica.length);

const hamburguesaCompleta = ["Pan","Hamburguesa","Cheddar","Lechuga","Tomate"," Jamon", "Huevo"];
console.log (hamburguesaCompleta.length);

const hamburguesaDali =[ "Pan de Queso","Hamburguesa","Cheddar","Lechuga","Tomate Confitado","Cebolla Caramelizada ","Panceta Crocante"];
console.log (hamburguesaDali.length);*/

