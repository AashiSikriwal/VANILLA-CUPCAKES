
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;



function setup() {
	createCanvas(1200, 400);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj=new dustbin(1000,350);
	paperObject=new paper(200,350,40);
  groundObject=new ground(width/2,370,width,20);
 
	
  var render = Render.create({
    element : document.body,
    engine : engine,
    option:{
      width: 1200,
      height: 700,
      wireframes: false
    }
  })
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  drawSprites();

  
  paperObject.display(); 
  groundObject.display();
  dustbinObj.display();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}



