var movingrect;
var gameobj1, gameobj2, gameobj3, gameobj4;

function setup() {
  createCanvas(800,400);
  movingrect =  createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "blue"


  gameobj1 = createSprite(100, 200, 20, 20);
  gameobj1.shapeColor = "blue"
  gameobj2 = createSprite(200, 200, 20, 20);
  gameobj2.shapeColor = "blue"
  gameobj3 = createSprite(300, 200, 20, 20);
  gameobj3.shapeColor = "blue"
  gameobj4 = createSprite(400, 200, 20, 20);
  gameobj4.shapeColor = "blue"

}

function draw() {
  background(255,255,255);  
 

  movingrect.y = mouseY;
  movingrect.x = mouseX;

  
  if(isTouching(movingrect, gameobj1)){
    gameobj1.shapeColor = "pink";
      movingrect.shapeColor = "pink";
    }
    else{
      gameobj1.shapeColor = "blue";
      movingrect.shapeColor = "green";
      
    }

    drawSprites();

  
}


