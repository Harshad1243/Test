var ball
function setup() {
  createCanvas(400,400);
  ball= createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyDown("right")){
ball.position.x+=5
  }
drawSprites()
}



