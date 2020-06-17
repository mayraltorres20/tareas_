var stopX  = 200; 
var stopY  = 200; 

var x = 100;
var y = 100;
 
var x1 = 100;
var y1 = 300;

var x2 = 300;
var y2 = 100;

var x3 = 300;
var y3 = 300;
  

var startX = 100; 
var startY = 100; 
 
var startX1 = 100; 
var startY1 = 300; 

var startX2 = 300; 
var startY2 = 100; 

var startX3 = 300; 
var startY3 = 300; 


var numeroP = 200; 
var step = 0.2 / numeroP; 
var pct = 0.0;  
function setup() {
  createCanvas(400, 400);
  
}

function draw() {

  background(220);
    
    if (pct < 1.0) {
      x = startX + ((stopX-startX) * pct); 
      y = startY + ((stopY-startY) * pct); 
      pct += step;
   }
   if (pct < 1.0) {
      x1 = startX1 + ((stopX-startX) * pct); 
      y1 = startY1 - ((stopY-startY) * pct); 
      pct += step;

   }
  if (pct < 1.0) {
      x2 = startX2 - ((stopX-startX) * pct); 
      y2 = startY2 + ((stopY-startY) * pct); 
      pct += step;

   }
   if (pct < 1.0) {
      x3 = startX3 - ((stopX-startX) * pct); 
      y3 = startY3 - ((stopY-startY) * pct); 
      pct += step;

   }
  ellipse(x, y, 100, 100);
  ellipse(x1, y1, 100, 100);
  ellipse(x2, y2, 100, 100);
  ellipse(x3, y3, 100, 100);

  
}