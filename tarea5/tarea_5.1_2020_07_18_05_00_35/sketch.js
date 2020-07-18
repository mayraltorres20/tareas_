function setup() {
  createCanvas(500, 500);
  fill(139,69,19)
}

function draw() {
  background(205,133,63);
  for(var x = 0; x <= 500; x = x + 124.8){
    for(var y = 62.4; y <= 500; y = y + 124.8){
     rect(y,x,62.4,62.4);
     rect(x,y,62.4,62.4);
     }
    }
      
  
}