
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground();

	bob1 = new Bob(300,400);
	bob2 = new Bob(350,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(500,400);

	rope1 = new SlingShot(bob1.body,ground.body,-100,15);
	rope2 = new SlingShot(bob2.body,ground.body,-50,15);
	rope3 = new SlingShot(bob3.body,ground.body,0,15);
	rope4 = new SlingShot(bob4.body,ground.body,50,15);
	rope5 = new SlingShot(bob5.body,ground.body,100,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-120,y:120});
	  }

}



