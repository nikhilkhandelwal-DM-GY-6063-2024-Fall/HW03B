function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  translate(width/2,height/2); //center of the canvas

  let size=300; //starting size of rectangle

  for(let i=0; i<20; i++){
    if(i%2==0){ //for filling alternate color
      fill(0);
    } else{
      fill(255);
    }

    rotate(PI/10);
    rectMode(CENTER);
    rect(0,0,size,size);
    size=size*0.85;
  }

}
function draw() {
}
