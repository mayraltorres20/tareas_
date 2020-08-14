
var positivo =  false;
var negativo = false;
var x = 0; 

function setup() {
  createCanvas(400, 400);
  intermedio(-12,24);
}

function draw() {
  background(220);
}

function intermedio(a,b){
  
  
  if(a < 0){
      a = a * -1;
      negativo  =  true;
  }else{
      positivo =  true;
  }
  if(b < 0){
      b = b * -1;
      negativo  = true;
  }else{
      positivo = true;
  }
  
  if ( positivo  && negativo){
      x= b- ((a + b) /2);
     console.log("Mixto");
  }else if (negativo && !positivo) {
      x = ((b + a) / 2) * -1
      console.log("Negativos");
  }else{
     x = (b + a) / 2
     console.log("Positivos");
  }
  
 console.log(x);
 
  
  
}