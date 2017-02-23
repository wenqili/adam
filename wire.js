var Wire = function(patchVCC, patchGND){
  //variables
  this.patchVCC = patchVCC;
  this.patchGND = patchGND;

  //calculate wire direction
  this.dir = p5.Vector.sub(this.patchGND.pos, this.patchVCC.pos)
  //normalize the direction to get one step
  this.dir.normalize();

  //draw start from the VCC patch
  this.prevPos = this.patchVCC.pos.copy();
  this.newPos = createVector(0,0);


  //to find the stop pointer
  this.maxWireLength = this.patchVCC.pos.dist(this.patchGND.pos);
  //functions
  this.update = function(){
    this.newPos = p5.Vector.add(this.prevPos, this.dir);
    this.wireLength = this.patchVCC.pos.dist(this.newPos);

  }

  this.display = function(){
    stroke(255,255,0);
    strokeWeight(20);
    line(this.patchVCC.pos.x, this.patchVCC.pos.y, this.patchGND.x, this.patchGND.y);
    line(this.prevPos.x, this.prevPos.y, this.newPos.x, this.newPos.y);
    if(this.wireLength<this.maxWireLength){
    this.prevPos = this.newPos.copy();
    }
  }

}
