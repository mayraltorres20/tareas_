var i = 0.1 // boca abierta
var velocidad = 0.04 // velocidad de boca

var formula1 = 0;
var formula2 = 0;
var valorCondicion1 = 1.6;
var valorCondicion2 = 0.09;

var inicial   =  true;
var izquierda =  false;
var arriba    =  false;
var abajo    =  false;
let song;

function setup() {
  createCanvas(400, 400);
  song = loadSound('audio.mp3')  
  speed = inicial;
  x =30;
  y =30;
  
}

function draw() {
  background(0);
   
  if (inicial){
     //console.log("derecha");
     formula1 = PI + HALF_PI+(i+=velocidad);
     formula2 = (HALF_PI) -(i+=velocidad) ;
  }else if (arriba){
     formula1 = PI+(i+=velocidad);
     formula2 = TWO_PI-(i+=velocidad);
  }else if (izquierda){
     formula1 =  (PI/2)+(i+=velocidad)   ;
     formula2 = (PI + HALF_PI) - (i+=velocidad);
  }else if (abajo){
     console.log("abajo");
     formula1 =  (TWO_PI) +(i+=velocidad)  ;
     formula2 = PI-(i+=velocidad) ;
  }
  
  //Cuerpo
  fill(255, 255, 0);
  ellipse(x, y, 50, 50);
  fill(0);
  
  //Reiniciar
  if (i >= valorCondicion1 || i <= valorCondicion2) {
    velocidad = velocidad*(-1) 
  }
  arc(x, y, 50, 50, formula1, formula2, PIE);
  
  
  if( keyCode == 37){
    //console.log("KEY 37");
    x = x - 1
    inicial =  false;
    arriba  =  false;
    abajo   =  false;
    if (!izquierda){
      izquierda =  true;
    }
  } else if(keyCode ==38){
    //console.log("KEY 38");
    y = y - 1
    inicial   =  false;
    izquierda =  false;
    abajo     =  false;
    if (!arriba){
      arriba =  true;
    }
    
  } else if(keyCode ==39){
    //console.log("KEY 39");
    x = x + 1
    arriba    =  false; 
    izquierda =  false;
    abajo =  false;
    if (!inicial){
      inicial =  true;
    }
 
  } else if(keyCode ==40){
   // console.log("KEY 40");
    y = y + 1
    arriba    =  false; 
    izquierda =  false;
    inicial   =  false
    if (!abajo){
      abajo =  true;
    }
  }
  
  if(x > 405){
    x = 0;
  }
  
  if(x < -5){
    x = 400;
  }
  
  if(y > 405){
    y = 0;
  }
  
  if(y < -5){
    y = 400;
  }
 
}

function mousePressed(){
  song.loop();
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);
 
  if(song.isPaying){
    song.stop();
  } else {
    song.play();
  }
}