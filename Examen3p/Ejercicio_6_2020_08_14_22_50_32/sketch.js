function setup() {
  createCanvas(400, 400);
  console.log("Resultado  --> "  + fibonacci(10) );

}

function draw() {
  background(220);
  
}

function  fibonacci (num){

  
    var limite = 100;
	var fibo = [0,1];

	for(i=2; i <= limite; i++){
		
      fibo.push(fibo[i-1] + fibo[i-2]);
      if (num == i){
          return fibo[i];
      }
	}
  

      return "No esta en el rango";
       

}

