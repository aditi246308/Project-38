var fox, fox_running;

function preload() {
//preload the images here
fox_running = loadAnimation("fox1.jpg","fox2.jpg","fox3.jpg","fox4.jpg","fox5.jpg","fox6.jpg","fox7.jpg","fox8.jpg");

}

function setup() {
  createCanvas(1200, 700);
  fox = createSprite(50,160,20,50);
  fox.addAnimation("running", fox_running);

}

function draw() {
  background(0);

  drawSprites();

}

