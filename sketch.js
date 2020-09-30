
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var bob1,bob2,bob3,bob4,bob5;
var bob1Diameter;
var chain1;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new roof(400,200,250,20);
	World.add(world,box1);

	bob1 = new bob(300,400,50);
	World.add(world,bob1);

	bob2 = new bob(350,400,50);
	World.add(world,bob2);

	bob3 = new bob(400,400,50);
	World.add(world,bob3);

	bob4 = new bob(450,400,50);
	World.add(world,bob4);

	bob5 = new bob(500,400,50);
	World.add(world,bob5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
	box1.display()

	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()

  drawSprites();
 
}



