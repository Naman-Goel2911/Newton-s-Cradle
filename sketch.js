
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var r = 25;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(500, 200);

	bobObject1 = new Bob(400, 425, 25);
	bobObject2 = new Bob(450, 425, 25);
	bobObject3 = new Bob(500, 425, 25);
	bobObject4 = new Bob(550, 425, 25);
	bobObject5 = new Bob(600, 425, 25);

	rope1 = new Rope(bobObject1.body, roof.body, -4*r);
	rope2 = new Rope(bobObject2.body, roof.body, -2*r);
	rope3 = new Rope(bobObject3.body, roof.body, -0*r);
	rope4 = new Rope(bobObject4.body, roof.body, 2*r);
	rope5 = new Rope(bobObject5.body, roof.body, 4*r);



	Engine.run(engine);
  
}


function draw() {
  background(255);

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y: -50});
	}
}