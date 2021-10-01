
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{}

function setup() {
	createCanvas(1275, 568);
	engine = Engine.create();
    world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(600,height,1400,20);
	Bullet = new bullet(600,20,50,50);
	Zombie = new zombie(Math.random(0,1275),570);
	shooter = new Man(600,40,125,175,Bullet.body,{x:600,y:40});
	//Bullet.x = shooter.x;
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  shooter.display();
  if(keyPressed){
  Bullet.display();
  }
  if(frameCount == 60){
  Zombie.display();
  Zombie.velocityY = 4;
  }
  keyPressed();
  drawSprites();
  Engine.update(engine);
 }
 function keyPressed(){
    if(keyCode === 32){
        Bullet.trajectory = [];
        Matter.Body.velocityY = 4; 
        Bullet.x = shooter.x;  
		Bullet.y = shooter.y;
    }
}


