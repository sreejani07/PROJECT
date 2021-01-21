  var playground,playground_runnig;
  var green_balloon;
  var pink_balloon;
  var blue_balloon;
  var red_balloon;
  var ARROW_bow;
  var bow_shoot_Imag
  var arrow_bow_Imag;
  var bow;

function preload(){
  //load your images here 
  playground_running=
  loadImage("background0.png");
  green_balloon_Imag=loadImage("green_balloon0.png");
  pink_balloon_Imag=loadImage("pink_balloon0.png");
  blue_balloon_Imag=loadImage("blue_balloon0.png");
  red_balloon_Imag=loadImage("red_balloon0.png");
  arrow_bow_Imag=loadImage("arrow0.png");
  bow_shoot_Imag=loadImage("bow0.png");
}


function setup() {
  createCanvas(400, 400);
  playground=createSprite(0,0,700,700);
  playground.addImage(playground_running);
  playground.scale=2.3;
for (var i=60;i<390;i=i+60){
  green_balloon=createSprite(50,i,1,1);
  green_balloon.addImage("ballon",green_balloon_Imag)
  green_balloon.scale=0.1;
}for (var i=40;i<390;i=i+40){
  pink_balloon=createSprite(100,i,1,1);
  pink_balloon.addImage("ballon",pink_balloon_Imag)
  pink_balloon.scale=1;
}
  for (var i=50;i<390;i=i+50){
  blue_balloon=createSprite(150,i,1,1);
  blue_balloon.addImage("ballon",blue_balloon_Imag)
  blue_balloon.scale=0.1;
}
  for (var i=50;i<390;i=i+50){
  red_balloon=createSprite(200,i,4,4);
  red_balloon.addImage("ballon",red_balloon_Imag)
  red_balloon.scale=0.1;
  }
    bow=createSprite(300,330,20,20)
    bow.addImage("balloon",bow_shoot_Imag);
    bow.scale=0.8;
     
}


function draw() {
  playground.velocityX=-3;
  if (playground.x<0){
  playground.x=playground.width/2;
  }
  bow.y=mouseY;
  //release arrow when space key is pressed//
  if(keyDown("Space")){
  var temp_arrow=createArrow();
  temp_arrow.addImage(arrow_bow_Imag);
  temp_arrow.y=bow.y;
  }
  //creating arrow for bow//
  function createArrow(){
  arrow=createSprite(360,100,5,10);
  arrow.velocityX = -6;
  arrow.scale=0.3;   
  return arrow;
  }
  
   drawSprites();
  
}

