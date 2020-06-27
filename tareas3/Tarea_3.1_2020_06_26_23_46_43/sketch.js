var azar;

function setup() {
  createCanvas(400, 400);
  background(129,0,0);
  stroke(0);
  fill(255);
  rect(50,50,300,300);
  
  
}

function draw() {
    
  if (mouseIsPressed ){
    azar = int(random(1,7));
    console.log(azar);
 
    clear();
    fill(0);

    if (azar == 1){
        ellipse(200,200,50,50);
    } else if (azar == 2){
       ellipse(100,100,50,50);
       ellipse(300,300,50,50);
    } else if (azar == 3){  
       ellipse(100,100,50,50);
       ellipse(200,200,50,50);
       ellipse(300,300,50,50);

    } else if (azar == 4){
      ellipse(100,100,50,50);
      ellipse(300,100,50,50);
      ellipse(100,300,50,50);
      ellipse(300,300,50,50);
    } else if (azar == 5){  
      ellipse(100,100,50,50);
      ellipse(100,300,50,50);
      ellipse(200,200,50,50);
      ellipse(300,100,50,50);     
      ellipse(300,300,50,50);

    } else if (azar == 6) {
      ellipse(100,100,50,50);
      ellipse(300,100,50,50);
      ellipse(100,300,50,50);
      ellipse(300,300,50,50);
      ellipse(100,200,50,50);
      ellipse(300,200,50,50);
    }
    mouseIsPressed= false;

  }
  
  function clear(){
    stroke(255);
    fill(255);
    
    ellipse(200,200,50,50);
   
    ellipse(100,100,50,50);
    ellipse(300,300,50,50);
    
    ellipse(100,100,50,50);
    ellipse(200,200,50,50);
    ellipse(300,300,50,50);
    
    ellipse(100,100,50,50);
    ellipse(300,100,50,50);
    ellipse(100,300,50,50);
    ellipse(300,300,50,50); 
    
    ellipse(100,100,50,50);
    ellipse(100,300,50,50);
    ellipse(200,200,50,50);
    ellipse(300,100,50,50);     
    ellipse(300,300,50,50);
    
    ellipse(100,100,50,50);
    ellipse(300,100,50,50);
    ellipse(100,300,50,50);
    ellipse(300,300,50,50);
    ellipse(100,200,50,50);
    ellipse(300,200,50,50);
  }
}
    
  
