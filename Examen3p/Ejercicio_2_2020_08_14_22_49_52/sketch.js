var area1;
var p = 3.1416;
function setup() {
  createCanvas(400, 400);
  background(0,200,180);
  ellipseMode(CENTER);
  ellipse(200,200,350,350);
  area1 = area_c(5);
  console.log(area1);
}

function draw() {
  textSize(28);
  text(area1, 80,200);
  fill(180,25,100);
}

function area_c(radio){
  area = p * Math.pow(radio,2);
  return area;
}
/*function area_c(radio,potencia){
  area = p * Math.pow(radio,potencia);
  return area;
}
function area_c(){
  area = p * Math.pow(5,2);
  return area;
}*/