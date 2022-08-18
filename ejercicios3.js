
let voto_usuario = "";


voto_usuario = alert("Con este programa vas a poder dividir el total de la cuenta entre vos y la gente con la cual saliste")

for (let i=0; i < 1 ; i++ ) {
  let num_uno = parseInt(prompt ("Ingrese el monto total que hayan gastado"));
  let num_dos = parseInt(prompt ("Ingresa el numero de comensales"));
  let num_propina = parseInt(prompt ("Ingresa el porcentaje de propina"));


  let resultado = num_uno/num_dos;
  let resultado1 = Math.floor(resultado);

  let propina = num_propina*num_uno/100;

  console.log("La cantidad que debe pagar cada uno es:", resultado1);
  console.log("La cantidad de propina:", propina);
  document.querySelector(".caja1b").innerHTML=num_uno;
  document.querySelector(".caja2b").innerHTML=resultado1;
  document.querySelector(".caja3b").innerHTML=propina;

}

