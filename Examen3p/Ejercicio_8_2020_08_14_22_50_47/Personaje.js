class Personaje{

    
  Constructor(){
     
  }
  
  salida(posicion , coordenada){

    if(posicion > 405 && coordenada == "x"){
      return "derecha";
    }

    if(posicion < -5 && coordenada == "x"){
      return "izquierda";
    }

    if(posicion > 405 && coordenada == "y"){
      return "abajo";
    }

    if(posicion < -5 && coordenada == "y"){
      return  "arriva";
    }
    
    return "nosalio";
    
  }
  
  
  movimiento(code , coordenada) {
     
    
    if(code == "izquierda" ){
      return coordenada - 1

    } else if(code =="arriva"){
      
      return coordenada - 1
    
    } else if(code =="derecha"){
      
      return  coordenada + 1
    
    }  else if(code =="abajo"){
      
      return coordenada + 1
    
    }
  }

  

}