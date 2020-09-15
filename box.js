class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    //var angle = 1;
    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    //pop();
  }
}