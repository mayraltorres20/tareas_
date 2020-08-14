function setup() {
  createCanvas(400, 400);
  recortar(15,0,10);
}

function draw() {
  background(220);
}
function recortar(num,mini,maxi){
  if(num < mini){
    consolo.log(mini);
  } else if(num > maxi){
    console.log(maxi);
  } else{
    console.log(num);
  }
}