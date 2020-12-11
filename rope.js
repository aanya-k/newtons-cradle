class SlingShot{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.bodyB.position;
        
        strokeWeight(2);

        var Anchor1x = pointA.x
        var Anchor1y = pointA.y

        var Anchor2x = pointB.x + this.offsetX;
        var Anchor2y = pointB.y + this.offsetY;

        line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);
    }
}
    