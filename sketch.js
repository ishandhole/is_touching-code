var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(600,300,50,50);
  object2 = createSprite(600,200,50,50);
  object3 = createSprite(600,100,50,50);
  object4 = createSprite(600,500,50,50);


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( is_Touching(movingRect, object4)){
    movingRect.shapeColor = "red";
  object4.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
  object4.shapeColor = "green";
  }
  if( is_Touching(movingRect, object2)){
    movingRect.shapeColor = "red";
  object2.shapeColor = "red";

  object2.x = 100;
  }
  else{
    movingRect.shapeColor = "green";
  object2.shapeColor = "green";
  }

  drawSprites();
}
