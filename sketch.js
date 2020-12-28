
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var bin,paper,ground;
 
 var engine,world;

 function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;


	paper = new Paper(200,300,70);
	ground = new Ground(width/2,370,width,20);
	bin = new Bin(1000,350);
	
	Engine.run(engine);
 }

 function draw() {

 rectMode(CENTER);
  background(230);

  paper.display();
  ground.display();
  bin.display();
  
 }

 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x :84,y : -84});
	 }
 }



