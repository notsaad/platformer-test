var person;
var jumping = false;

function setup() {
  createCanvas(600, 400);
  person = new Person();
}
  
  function keyPressed() {
    if (key == 'ArrowUp' && jumping == false ){
    var jump = createVector(0, -5);
    person.applyForce(jump);
    jumping = true;   
  }
 if (key == 'ArrowLeft'){
    person.vel.x = -2;
 }
  
    if (key == 'ArrowRight'){
    person.vel.x = 2;
  
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
