const boton = document.getElementById( 'btn' ); 
const fondo = document.getElementById( 'contenido' ); 

boton.addEventListener( 'click', function(){
  const letra = [ 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
  let hex = '#';
  
  for ( let i = 0; i < 6; i++ ) {
    hex += letra[ Math.floor( Math.random() * letra.length ) ];
  }
  
  console.log( hex );
  fondo.style.backgroundColor = hex ; 
} )