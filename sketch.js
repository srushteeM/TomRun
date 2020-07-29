
//Creating variables
var tom;
var ground;
var water,croc1,croc2,croc3,croc4;
var flag=1;
var Water1,Log,Rock,Mud;
var crocGroup;
//loading images
/*function preload() {
 water=loadimage();
 water1=loadimage();
croc1=loadimage();
croc2=loadimage();
croc3=loadimage();
croc4=loadimage();
Log=loadimage(); 

*/

//Setup function
function setup() {
  createCanvas(400,600);
  ground = createSprite(200,400,400,1200);
  ground.shapeColor="pink"
  tom= createSprite(200, 500, 30, 30);
  crocGroup=new Group();
}
//draw function
function draw() {

 //background colour=Black
  background(0);  

  //Allowing tom to move in different directions
  if(keyDown(LEFT_ARROW)){
    tom.x=tom.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    tom.x=tom.x+2;
  }

  ground.velocityY=4;

  if(ground.y>600){
    ground.y=300;
  }


//SPAWNING OBSTACLES(WATER AND CROC)
  spawnWater();
  spawnCroc();
  /*spawnMud();
  spawnRock();
  spawnWater1();
  spawnLog();
  */
  drawSprites();
}
function spawnWater(){
  if(frameCount===100 || frameCount%500===0){
    water=createSprite(200,0,400,80);
    water.shapeColor="blue";
    water.velocityY=1.5;
  
  }
}
function spawnCroc(){
 if(frameCount===120 || frameCount%500===0){
      croc1=createSprite(400,water.y-20,80,20);
      croc2=createSprite(0,water.y+20,80,20);
      croc3=createSprite(500,water.y-20,80,20);
      croc4=createSprite(-100,water.y+20,80,20);
      croc1.shapeColor="green";
      croc1.velocityX=-1;
      croc1.velocityY=1.5;
      croc2.shapeColor="green";
      croc2.velocityX=1;
      croc2.velocityY=1.5;
      croc3.shapeColor="green";
      croc3.velocityX=-1;
      croc3.velocityY=1.5;
      croc4.shapeColor="green";
      croc4.velocityX=1;
      croc4.velocityY=1.5;

    crocGroup.add(croc1);
     crocGroup.add(croc2);
      crocGroup.add(croc3);
       crocGroup.add(croc4);
    }
    //here water1 is with log instead of crocodiles
}
   /* function spawnWater1(){
      if(frameCount===200 || frameCount%700===0){
        water=createSprite(200,0,400,80);
        water.shapeColor="blue";
        water.velocityY=1.5;
      }
      }
      function spawnLog(){
      if(frameCount===220 || frameCount%700===0){
        Log1=createSprite(400,water.y-20,20,20);
        Log2=createSprite(0,water.y+20,20,20);
        Log3=createSprite(450,water.y-20,20,20);
        Log4=createSprite(-40,water.y+20,20,20);

      Log1.shapeColor="brown";
      Log1.velocityX=-1;
      Log1.velocityY=1.5;

      Log2.shapeColor="brown";
      Log2.velocityX=1;
      Log2.velocityY=1.5;

      Log3.shapeColor="brown";
      Log3.velocityX=-1;
      Log3.velocityY=1.5;

      Log4.shapeColor="brown";
      Log4.velocityX=1;
      Log4.velocityY=1.5;

      }
      }

      //MUD AND THE ROCKS
     
      function spawnMud(){
        if(frameCount===400 || frameCount%900===0){
          Mud =createSprite(200,0,400,80);
          Mud.shapeColor="blue";
          Mud.velocityY=1.5;
        }
        }
        function spawnRock(){
        if(frameCount===420 || frameCount%900===0){
          Rock1=createSprite(400,water.y-20,20,20);
          Rock2=createSprite(0,water.y+20,20,20);
          Rock3=createSprite(450,water.y-20,20,20);
          Rock4=createSprite(-40,water.y+20,20,20);
  
        Rock1.shapeColor="red";
        Rock1.velocityX=-1;
        Rock1.velocityY=1.5;
  
        Rock2.shapeColor="red";
        Rock2.velocityX=1;
        Rock2.velocityY=1.5;
  
        Rock3.shapeColor="red";
        Rock3.velocityX=-1;
        Rock3.velocityY=1.5;
  
        Rock4.shapeColor="red";
        Rock4.velocityX=1;
        Rock4.velocityY=1.5;
  
        }
        }*/
    