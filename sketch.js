const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balloon,balloonImage1,balloonImage2;
var bird1 , bird1Image ;


function preload(){
   bgImg =loadImage("sky.png");
   balloonImage1=loadImage("Balloon.png");
 
   platformImage = loadImage("base.png");
   sling1 = loadImage("sling1.png");
   sling2 = loadImage("sling2.png");
   sling3 = loadImage("sling3.png");
   bird1Image = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");

   
}
  

//Function to set initial environment
function setup() {
 
  createCanvas(800,500);
  engine = Engine.create();
    world = engine.world;


  bg = createSprite(400,250);  
  bg.addImage(bgImg);
  bg.scale = 0.89;
  bg.velocityX = -2;

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.4;

  stone = new Stone(balloon.x+60,balloon.y+50,10);
  sling= new Sling(stone.body,{x:balloon.x+60,y:balloon.y+50})
  bgroup = new Group();

  Engine.run(engine);
}

// function to display UI
function draw() {
  background(0);
 
  if(bg.x<-50){
    bg.x = 800
  }

  if(keyDown("w")){
    balloon.y -= 10 ;
  }
  if(keyDown("s")){
    balloon.y += 10;
  }
  spawnObstacles();

  drawSprites();
  image(platformImage,balloon.x+22,balloon.y+95,105,8);
  image(sling1,balloon.x+60,balloon.y+50,20,50);
  stone.display();
  image(sling2,balloon.x+50,balloon.y+50,20,30);
  sling.display();
}

  function spawnObstacles(){
    if(frameCount%150===0){
      bird1 = createSprite(850,Math.round(random(100,400)),50,50);
      bird1.addAnimation("bird",bird1Image);
      bird1.velocityX = -5 ;
      bird1.lifetime =  190;
      bgroup.add(bird1);
    }


  }
  