var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=1;
var arrowg;
var pinkg;
var blueg;
var greeng;
var redg;
var START=1;
var PLAY=2;
var END=3;
var gamestate=1;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  redg=new Group();
  greeng=new Group();
  blueg=new Group();
  pinkg=new Group();
  arrowg=new Group();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 140 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  
  if (World.frameCount % 190 == 0) {
    if (select_balloon == 1) {
      blueBalloon();
    }
  }
  
  if (World.frameCount % 210 == 0) {
    if (select_balloon == 1) {
      greenBalloon();
    }
  }
  
  if (World.frameCount % 270 == 0) {
    if (select_balloon == 1) {
      pinkBalloon();
    }
  }
  
  if(arrowg.isTouching(blueg)){
    
    blueg.destroyEach();
    arrowg.destroyEach();
    score=score+1
  }
  
  if(arrowg.isTouching(pinkg)){
    
    pinkg.destroyEach();
    arrowg.destroyEach();
    score=score+2
  }
  
if(arrowg.isTouching(redg)){
    
    redg.destroyEach();
    arrowg.destroyEach();
    score=score-1
  }
  
if(arrowg.isTouching(greeng)){
    
    greeng.destroyEach();
    arrowg.destroyEach();
    score=score-0.5;
  }
  
  


  
  
  drawSprites();
  
  // fill("black");
  // text("Score:"+score,300,20);
  // text("Red= -1",20,35);
  // text("Blue= +1",20,50);
  // text("Green= -0.5",20,65);
  // text("Pink= +2",20,80);
  // text("If score reaches -1,",20,95)
  // text("game Over",20,110)
  if(gamestate===1){
   arrowg.setVelocityXEach(0);
   redg.setVelocityXEach(0);
   blueg.setVelocityXEach(0);
   pinkg.setVelocityXEach(0);
   greeng.setVelocityXEach(0);
   redg.setVisibleEach(false);
   blueg.setVisibleEach(false);
   pinkg.setVisibleEach(false);
   greeng.setVisibleEach(false);
   arrowg.setVisibleEach(false);
  fill("black")
  text("Press Enter to start",160,180);
   
   }
  
  if(keyDown("enter")&&gamestate==1){
     gamestate=2
     }
  

  
  if(gamestate===2){
  fill("black");
  text("Score:"+score,300,20);
  text("Red= -1",20,35);
  text("Blue= +1",20,50);
  text("Green= -0.5",20,65);
  text("Pink= +2",20,80);
  text("If score reaches -1,",20,95);
  text("game Over",20,110);
  fill("red")
  text("Press space to",20,130)
  text("launch arrow",20,145)
     }
  
  
  
if(score===0||score===-0.5){
   arrowg.setVelocityXEach(0);
   redg.setVelocityXEach(0);
   blueg.setVelocityXEach(0);
   pinkg.setVelocityXEach(0);
   greeng.setVelocityXEach(0);
   arrowg.setVisibleEach(false);
   redg.setVisibleEach(false);
   blueg.setVisibleEach(false);
   pinkg.setVisibleEach(false);
   greeng.setVisibleEach(false);
   scene.velocityX=0;
   gamestate=3;
  fill("black");
  text("Score:"+score,300,20);
  text("Red= -1",20,35);
  text("Blue= +1",20,50);
  text("Green= -0.5",20,65);
  text("Pink= +2",20,80);
  textSize(25)
  
  text("Game Over",155,200)
  textSize(10)
  text("Press 'R' to restart",179,220)
   }
  
  if(keyDown("R")&&gamestate===3){
     gamestate=1;
     score=0;
     }

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowg.add(arrow);
   
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redg.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(30, 350)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueg.add(blue);

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greeng.add(green);

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(10, 330)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.4;
  pinkg.add(pink);

}
