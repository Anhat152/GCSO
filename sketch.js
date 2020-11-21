var car,wall;
var speed,weight;
var deformation
function setup() {
  createCanvas(1600,400);
  car=createSprite(100,200,50,50);
  wall=createSprite(1500,200,30,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  car.shapeColor="white";
  wall.shapeColor="grey";
}

function draw() {
  background(0); 
if( wall.position.x-car.position.x<car.width/2+wall.width/2){
car.velocityX=0;
deformation=0.5*speed*speed*weight/22509;
if(deformation>180){
  car.shapeColor="red";
}
if(deformation>180 && deformation<100){
  car.shapeColor="yellow";
}
if(deformation<100){
  car.shapeColor="green";
}
}
  
  
  




  drawSprites();
  
}
