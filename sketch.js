var garden,rabbit;
var gardenImg,rabbitImg,appleImg,grassImg,leafImg,orangeLeafImg,redImg,pathImg;

var appleGroup = new Group();
var leavesGroup = new Group();
var redLeavesGroup = new Group();

var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  pathImg = loadImage("path.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  //rabbit moving on x-axis with mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0) {
    if(select_sprites == 1){
     createApples();
    } else if(select_sprites == 2){
     createLeaves();
    } else if(select_sprites == 3){
     createRedLeaves();
    } 
  }
}

  if(rabbit.isTouching(appleGroup)){
    appleGroup.destroyEach(); 
  }


  textSize(30);
  fill("white");
  text("score:"+score, 300, 30);

function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 6;
  apple.lifetime = 150;
}

function createLeaves() {
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leafImg);
  leaves.scale = 0.08;
  leaves.velocityY = 6;
  leaves.lifetime = 150;
}

function createRedLeaves() {
  redLeaf = createSprite(random(50,350),40,10,10)
  redLeaf.addImage(redImg);
  redLeaf.scale = 0.08;
  redLeaf.velocityY = 6;
  redLeaf.lifetime = 150;
}










