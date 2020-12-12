var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite1 = createSprite(width/2,height-45,200,20);
	boxSprite1.shapeColor = "red";

	boxSprite2 = createSprite(width/2-100,height-85,20,100);
	boxSprite2.shapeColor = "red";

	boxSprite3 = createSprite(width/2+100,height-85,20,100);
	boxSprite3.shapeColor = "red"

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //create a box
	 box1 = Bodies.rectangle(width/2,height-45,200,20, {isStatic:true} );
	 box2 = Bodies.rectangle(width/2-100,height-85,20,100, {isStatic:true} );
	 box3 = Bodies.rectangle(width/2+100,height-85,20,100, {isStatic:true} );
	
	World.add(world,box1);
	World.add(world,box2);
	World.add(world,box3);

	Engine.run(engine);
   
}


function draw() {
 
  background(0);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.rotation = degrees(packageBody.angle);
 //console.log(packageBody.position.y);
 if(packageBody.position.y>= 640){
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.depth=1;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	console.log(packageSprite);
 }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody,false);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	//packageSprite.x= packageBody.position.x 
	//y= packageBody.position.y 
	//World.add(world, packageBody);
	
    
  }
}



