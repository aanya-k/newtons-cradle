class Bob{
    constructor(x,y){
        var options={
            density: 1.5,
            isStatic: false,
            restitution: 0.1,
            friction: 0
        }
        this.body = Matter.Bodies.circle(x,y,25,options);
        this.radius = 50;
        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);

    }
}