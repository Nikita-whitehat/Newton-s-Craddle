const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 roof = new Roof(400,20,700,20);
	 
   bob1 = new Bob (170,600);
   bob2= new Bob(240,600);
   bob3 = new Bob(310,600);
   bob4 = new Bob(380,600);
   bob5 = new Bob(450,600);

  rope1 = new Rope(bob1.body,{x:170,y:22});
  rope2 = new Rope(bob2.body,{x:240,y:22});
  rope3 = new Rope(bob3.body,{x:310,y:22});
  rope4 = new Rope(bob4.body,{x:380,y:22});
  rope5 = new Rope(bob5.body,{x:450,y:22});

}

  
function draw() {

  background(225);
  Engine.update(engine);

  console.log(bob1);

  roof.display();

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

}

function keyPressed(){

  if(keyCode === 32){

    Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x,y:bob1.body.position.y},{x:-0.3,y:0});

  }

  

}



