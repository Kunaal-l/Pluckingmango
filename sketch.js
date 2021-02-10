
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var stone

function preload()
{
	
}

function setup() {
	createCanvas(1800, 1700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(200,200)
 boy = new Slingshot(stone.body , {x:100,y:200})
 tree = new Tree(200,200)
 mango = new Mango(300,200);
	Engine.run(engine);;
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
   stone.display();
   boy.display();
   tree.display(); 
   mango.display();
  drawSprites();
 
}
function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  boy.fly();

}



