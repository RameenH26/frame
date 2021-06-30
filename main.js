function preload() {

}

function setup() {
    canvas= createCanvas(400, 400);
    canvas.position(435, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
  //flipped camera code
    push();
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, 400, 400);
  pop();
  

  //frame code
  fill('black')
  rect(0, 0, 400, 20);
  rect(0, 380, 400, 20);
  rect(-1, 20, 20, 360);
  rect(381, 20, 20, 360);
 
}

function take_snapshot() {
    save('digital_frame.png');
}