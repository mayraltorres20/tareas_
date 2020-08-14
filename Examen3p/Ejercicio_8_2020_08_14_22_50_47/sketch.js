var hc;
var dv;

var entrarP1 =  true;
var salidaXP1 = "";
var salidaYP1 = "";

var entrarP2 =  true;
var salidaXP2 = "";
var salidaYP2 = "";



var x = 200;
var y = 200;


var x1 = 50;
var y1 = 50;


function setup() {
  createCanvas(400, 400);
  background(220);
  
  hc = loadImage("hanchuy.png");
  dv = loadImage("veder2.png");
  
  personaje = new Personaje(); 
}

function draw() {
  background(220);
  imageMode(CENTER);

  
  if (entrarP1){
      image(hc,x,y,100,100);
  
  }
  
  if (entrarP2){
      image(dv,x1,y1,100,100);
  }
  
  
  //Movimientos personaje 1
  if (entrarP1){

    if(keyCode == 37){
      x = personaje.movimiento("izquierda" , x);
    } else if(keyCode ==38){
      y = personaje.movimiento("arriva",y);
    } else if(keyCode ==39){
      x = personaje.movimiento("derecha",x);
    }  else if(keyCode ==40){
      y = personaje.movimiento("abajo",y);
    }
    
  }  
  //Movimiento personaje 2
  if (entrarP2){
    if(keyCode == 65){
      x1 = personaje.movimiento("izquierda",x1);
    } else if(keyCode ==87){
      y1 = personaje.movimiento("arriva",y1);
    } else if(keyCode ==83){
      x1 = personaje.movimiento("derecha",x1);
    }  else if(keyCode ==68){
      y1 = personaje.movimiento("abajo",y1);
    }
  }
  
  
  

  //Valida la salida del personaje1 por X
  salidaXP1 = personaje.salida(x , "x")
  salidaYP1 = personaje.salida(y , "y")

  //Valida la salida del personaje2 por X

  salidaXP2 = personaje.salida(x1 , "x")
  salidaYP2 = personaje.salida(y1 , "y")

  
  
  //Salida personaje 1 con letra Y
  if(keyCode == 89){
    entrarP1 =  false;     
  }

  //Salida personaje 2 con letra U

  if(keyCode == 85){
    entrarP2 =  false;     
  }
  
  //Entrada P1 con letra X
  if(keyCode == 88){
    entrarP1 =  true;    
    if (salidaXP1 =="derecha"){
        x = 0;
    }
    if (salidaXP1 =="izquierda"){
        x = 400;
    }
    if (salidaYP1 =="abajo"){
        y = 0;
    }
    if (salidaYP1 =="arriva"){
        y = 400;
    }
    
  }
  
  
  
  //Entrada P2 con letra C
  if(keyCode == 67 ){
    entrarP2 =  true;    
    if (salidaXP2 =="derecha"){
        x1 = 0;
    }
    if (salidaXP2 =="izquierda"){
        x1 = 400;
    }
    if (salidaYP2 =="abajo"){
        y1 = 0;
    }
    if (salidaYP2 =="arriva"){
        y1 = 400;
    }
    
  }
  
  

}