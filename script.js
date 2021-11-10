var cube = document.querySelector('.cube');
var currentClass = '';

function changeSide() {
  var random = Math.floor(Math.random() * (7 - 1)) + 1;
  var showClass = 'show-' + random;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}