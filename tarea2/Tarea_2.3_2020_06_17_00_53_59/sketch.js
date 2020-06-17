function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
  ellipseMode(CENTER);
  
}
escala  = 1.0;

function draw() {
  background(250,220,0);

 
  if (escala > 0 ){
 
  
    translate(width / 2, height / 2);
    scale(escala);
    fill(0,200,220);
    rect(0, 0, 300, 300); 
    fill(50,205,50);
    ellipse(0,0,200,200);
    escala =escala -0.005;

  }
 
 
}