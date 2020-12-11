class Ground{
    constructor(){
        var options={
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(400,200,260,30,options);
        
        this.width = 260;
        this.height = 30;

        World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}
}