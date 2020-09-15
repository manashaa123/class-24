class Pig {
    constructor(x,y) {
    var options ={
        'restitution':0.8,
        'friction':0.3,
        'density':1,
        }
        this.body = Bodies.circle(x, y, 15, options);
        World.add(world, this.body)
    }
    display() {
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 30);
    }
}