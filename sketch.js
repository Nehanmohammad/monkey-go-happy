
var monkey , monkey_running
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage,stoneImage;
var  obstacleGroup;
var score
var ground
var survivalTime

var gamestate = "play";



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
  bananaGroup = new Group ();
  obstacleGroup = new Group ();
 
}



function setup() {
  createCanvas(windowWidth,windowHeight)
  

  monkey = createSprite(36,240,20,20)
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200,400,1000,5);
  ground.velocityX = -4;
  
  var SurvivalTime = 0;
  
  
  
}


function draw() {
  background ("lightwhite")
  
  if (gamestate === "play"){
      console.log(monkey.y)
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  stroke ("white");
  strokeWeight(3);
  textSize(20);
  fill("black");
  text("score :" + score ,370,50);

  if(keyDown("space")&& monkey.y >= 366) {
        monkey.velocityY = -17 ;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  if (bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
    }
    if (obstacleGroup.isTouching(monkey)){
      ground.setVelocity = 0;
      bananaGroup.setVelocityXEach (0);
      obstacleGroup.setVelocityXEach (0);
       gameState = "dead"
    }
      
  banana(); 
  stones();
       
  drawSprites();
    
     }
  }
 if (gamestate==="dead"){
   
   bananaGroup.destroyEach ();
   obstacleGroup.destroyEach ();
   
   
  stroke("black")  
  strokeWeight(6)  
  fill("blue")  
  textSize(30);  
  text("better luck next time",200,200)
 }

function banana (){
     
    
  if(frameCount % 130 === 0){
    var banana = createSprite (500,400,10,10);
    banana.y = Math.round(random(200,250));
    banana.velocityX  = -6;
    banana.addImage("eating",bananaImage);   
    banana.scale = 0.1;
    banana.debug = false;
    banana.setCollider("rectangle",0,0,600,700);
    
    bananaGroup.add(banana);
    

  }  
          
             
    } 

function stones (){ 
  
  if (frameCount % 120 === 0){
    var obstacle = createSprite (500,370,10,10)
    obstacle. addImage("stones",stoneImage);   
    obstacle.scale = 0.2;
    
    obstacle.debug =  false;
    obstacle.setCollider("rectangle",0,0,200,200);
   
    
    obstacle.velocityX = -6;
     
    obstacleGroup.add(obstacle);
  
  }
  
  }





