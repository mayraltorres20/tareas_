var area1;

function setup() {
  createCanvas(400, 400);
  background(0);
  rect(50,130,300,100);
  area1 = area(10,15);
  console.log(area1);
}

function draw() {
  textSize(50);
  //text(area(10,15), 10, 30);
  text(area1, 150, 200);
  fill(0, 102, 153);


}
 function area(base,altura){
   var area = base*altura;
   return area;
 }