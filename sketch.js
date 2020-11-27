var a,b
function setup() {
  createCanvas(1200,800);
  a = createSprite(400, 200, 80, 50);
  b = createSprite(600, 400, 50, 80);
  a.shapeColor = "red"
  b.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  a.x = World.mouseX
  a.y = World.mouseY
  console.log (a.x - b.x)
  if (a.x-b.x < b.width/2+a.width/2 && b.x - a.x < b.width/2 && a.y - b.y < b.height/2+a.height/2&&a.y-b.y<b.height/2+a.height/2){
    a.shapeColor = "green"
    b.shapeColor = "green"
  }
  else {
    a.shapeColor="red"
    b.shapeColor="red"
  }
  drawSprites();
}