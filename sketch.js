var tsest;
var epiccloud,epiccloudImage

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    epiccloudImage=loadImage("cloud.png")
}
function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    invisibleGround=createSprite(200,195,400,20)
    invisibleGround.visible=false
}
function draw() {
    background("black")
    //jump when the space button is pressed
    if (keyDown("space")&&trex.y>=100) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8 
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    spawnClouds();
    
    drawSprites();
}

function spawnClouds(){
    if(frameCount%60===0){
        epiccloud=createSprite(600,30,50,10)
        epiccloud.velocityX=-4;
        epiccloud.addImage(epiccloudImage)
        epiccloud.scale=0.2
        epiccloud.y=Math.round(random(20,70))
        epiccloud.depth=trex.depth
        trex.depth=trex.depth+1;

    }

}
















































