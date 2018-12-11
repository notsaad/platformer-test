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
    fill(11, 57, 84);
    stroke(255);
    rect(this.pos.x, this.pos.y - 50, 20, 50);
  }

  this.movement = function() {
   	if (keyIsDown && (key === 'ArrowLeft')) {
  		this.vel.x = -400;
   }
    if (keyIsDown && (key === 'ArrowRight')) {
    this.vel.x = 400;
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
          this.vel.x = 0;
      
    	}
      
      if (this.pos.x > width + 20) {
       
        this.pos.x = width - 20;
        
      }
      
      if (this.pos.x < -20) {
       
        this.pos.x = -20;
        
      }
      
      constrain(this.pos.x, 0 - 10, width + 10);
      
    }
}
}
