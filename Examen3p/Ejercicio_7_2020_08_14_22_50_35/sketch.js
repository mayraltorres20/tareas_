
var j = 0;

function setup() {
  createCanvas(400, 400);
  rotar(3)
}

function draw() {
  background(220);
}

function  rotar(numero){

  var numeros = [1, 2, 3, 4, 5,6,7];
  
  for (rota = 0 ; rota < numero ; rota++){
    
    //Crear array vacio con el mismo tamaño del array de numeros
    var numerosTemp = new Array(numeros.length);
    

     for (i = 0  ; i < numeros.length   ;  i++){

       if (i >= numerosTemp.length -1  ){
           numerosTemp[0]   =  numeros[i]; 
       } else{
          j = j+1;
          numerosTemp[j] = numeros[i];
       } 
    } 
    
    
    console.log("Numeros rota " + rota +  " -> " + numerosTemp.toString())

    numeros = numerosTemp ;
    numerosTemp =  ""
    j = 0;
         
  }
    
    
  }