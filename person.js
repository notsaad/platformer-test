function Person() {
  this.pos = createVector(50, height);
  this.vel = createVector(0*0.95, 0);
  this.acc = createVector(0, 0);
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255);
    stroke(255);
    rect(this.pos.x, this.pos.y - 50, 20, 50);
  }

  this.movement = function() {
   	if (keyPressed && (key === 'ArrowLeft')) {
  		this.vel.x = -200;
   }
    if (keyPressed && (key === 'ArrowRight')) {
    this.vel.x = 200;
}
	else {
    this.vel.x = 0;
  }}
  
  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
      
         if(this.pos.y >= height){
     
      		jumping = false;
      
    	}
      
      if (this.pos.x > width + 10) {
       
        this.pos.x = -10;
        
      }
      
      if (this.pos.x < -10) {
       
        this.pos.x = width + 10;
        
      }
    }
}
}
