function setup() {
    createCanvas(1000, 600);
      background("rgb(13,49,13)");
  }
  
  function draw() {
  
      stroke("blue")
      fill("red") 
    if(mouseIsPressed){
  
  rect(mouseX, mouseY, 20, 35);
  
  }
  }