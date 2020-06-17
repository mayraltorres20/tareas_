var numeroP = 200;
var step = 0.2 / numeroP;
var pct = 0.0;

var x =200;
var y = 0;

var startX = 200;
var startY = 0;

var stopX = 200;
var stopY = 200;

var x1 = 0;
var y1 = 400;

var startX1 = 0;
var startY1 = 400;

var x2 = 400;
var y2 = 400;

var startX2 = 400;
var startY2 = 400;


function setup() {
  createCanvas(400, 400);
  stroke(255);
}

function draw() {
  background(0);
  if (pct < 1.0){
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;

  }
   if (pct < 1.0){
    x1 = startX1 + ((stopX - startX1) * pct);
    y1 = startY1 + ((stopY - startY1) * pct);
    pct += step;
   }
   if (pct < 1.0){
    x2 = startX2 + ((stopX - startX2) * pct);
    y2 = startY2 + ((stopY - startY2) * pct);
    pct += step;
   }
  line(x,y,200,200);
  line(x1,y1,200,200);
  line(x2,y2,200,200);
}