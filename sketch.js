var person;
var jumping = false;

function setup() {
  createCanvas(600, 400);
  person = new Person();
}
  
  function keyPressed() {
    if (keyPressed && key == 'ArrowUp' && jumping == false ){
    var jump = createVector(0, -5);
    person.applyForce(jump);
    jumping = true;   
  }
 if (keyPressed && key == 'ArrowLeft' && person.pos.y < height ){
    person.vel.x = -3;
 }
  
    if (keyPressed && key == 'ArrowRight' && person.pos.y < height){
    person.vel.x = 3;
  
    }
    
}

function draw() {
  background(51);

  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);
  
  person.update();
  person.edges();
  person.display();
	//person.movement();
  
  fill(255, 0, 100);
  
}
