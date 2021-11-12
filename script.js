const btn = document.querySelector('#random');
btn.onclick = changeSide;

function changeSide() {
  let random = random_number();
  let face;

  if(random == 1) face = "rotateY(0deg)";
  else if( random == 2) face = "rotateY(-90deg)";
  else if (random == 3) face = "rotateY(-180deg)";
  else if (random == 4) face = "rotateY(-90deg)";
  else if (random == 5) face = "rotateX(-90deg)";
  else if (random == 6) face = "rotateX(90deg)";
  else alert('error');

  document.getElementById("cube").style.transform = face;
}

function random_number() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}