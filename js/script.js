var output = document.getElementById('output');
var listaMail = ['pippo@libero.it', 'pluto@gmail.com', 'paperino@yahoo.it', 'estefansilvi@gmail.com', 'partipilo@libero.it'];
var mailLogin = prompt(' Per accedere al gioco inserire la mail con la quale si è registrato');
var mailTrovata = false;


for(var i = 0; i < listaMail.length; i++) {
  console.log(listaMail[i]);
  if(listaMail[i] === mailLogin) {
    mailTrovata = true;
    console.log( 'trovato');
  }
}
if(!mailTrovata) {
  output.append('\nAccesso negato. Non sei registrato!')
} else {
  var numeroGiocatore =Math.floor(Math.random() * 6) +1;
  var numeroComputer = Math.floor(Math.random() * 6) +1;

  if(numeroGiocatore > numeroComputer){
    output.append('\nComplimenti hai vinto');
  } else if(numeroGiocatore < numeroComputer){
    output.append('\nMi dispiace hai perso');
  } else {
    output.append('\nOps! Avete vinto entrambi.')
  }
}
