

function setup() {
  createCanvas(400, 400);
  console.log(relacion(5,10));
  console.log(relacion(10,5));
  console.log(relacion(5,5));
}

function draw() {
  background(220);
}

function relacion(a,b){
  if(a > b){
    return 1;
  } else if(a < b){
    return -1;
  } else if(a == b){
    return 0;
  }
}