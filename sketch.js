let img;
let toad;
let pipe;
var song;

function preload() {
  toad = loadImage('toad.png')
  pipe = loadImage('pipe.png')
  song = loadSound('NightTimeCrickets.mp3');
}

function setup() {
  createCanvas(1000, 1000);
  img = loadImage('tallgrass.png');
  song.play();
}

function draw() {
  //background with transparancy
  background(0, 0, 35, 25);
  //blinking stars
  var galaxy = {
    locationX: random(1000),
    locationY: random(1000),
    size: random(2, 6)
  }
  ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);

  fill(255);
  ellipse(188, 100, 120, 120);

  fill(0, 0, 34);
  ellipse(248, 100, 120, 120);

  image(img, -70, 80);

  noStroke();

  fill(25, 51, 0);
  rect(0, 657, 1000, 400);

  noStroke(255);
  fill(255, 235, 205);
  beginShape();
  curveVertex(320, 780);
  curveVertex(660, 780);
  curveVertex(690, 550);
  curveVertex(490, 300);
  curveVertex(500, 300);
  curveVertex(290, 550);
  endShape(CLOSE);


  noStroke(255);
  fill(220, 20, 60);
  beginShape();
  curveVertex(300, 470);
  curveVertex(680, 470);
  curveVertex(730, 380);
  curveVertex(490, 180);
  curveVertex(320, 280);
  curveVertex(260, 380);
  endShape(CLOSE);

  fill(255);
  ellipse(318, 354, 70, 70);

  fill(255);
  ellipse(362, 404, 40, 40);

  fill(255);
  ellipse(302, 424, 30, 30);

  fill(255);
  ellipse(420, 430, 60, 60);

  fill(255);
  ellipse(490, 410, 50, 50);

  fill(255);
  ellipse(540, 440, 40, 40);

  fill(255);
  ellipse(610, 410, 55, 55);

  fill(255);
  ellipse(690, 435, 35, 35);

  fill(255);
  ellipse(675, 370, 45, 45);

  fill(255);
  ellipse(615, 335, 65, 65);

  fill(255);
  ellipse(595, 280, 35, 35);



  fill(255);
  ellipse(545, 350, 55, 55);

  fill(255);
  ellipse(475, 315, 65, 65);

  fill(255);
  ellipse(535, 285, 45, 45);

  fill(255);
  ellipse(520, 240, 35, 35);

  fill(255);
  ellipse(440, 230, 60, 60);




  fill(255);
  ellipse(410, 350, 50, 50);

  fill(255);
  ellipse(390, 280, 30, 30);

  fill(255);
  rect(452, 655, 85, 125, 40, 40, 0, 0);

  fill(220, 20, 60);
  ellipse(520, 734, 15, 15);

  fill(224, 255, 255);
  rect(526, 504, 120, 85, 15, 15, 15, 15);

  fill(224, 255, 255);
  rect(345, 504, 120, 85, 15, 15, 15, 15);

  fill(224, 255, 255);
  rect(562, 657, 85, 85, 15, 15, 15, 15);

  fill(224, 255, 255);
  rect(345, 657, 85, 85, 15, 15, 15, 15);

  fill(195);
  arc(419, 785, 60, 120, PI, TWO_PI);

  fill(195);
  arc(359, 785, 50, 40, PI, TWO_PI);

  fill(195);
  arc(569, 785, 50, 80, PI, TWO_PI);

  fill(205);
  arc(599, 785, 40, 50, PI, TWO_PI);



  fill(185);
  arc(579, 795, 30, 50, PI, TWO_PI);

  fill(190);
  arc(589, 810, 50, 45, PI, TWO_PI);

  fill(200);
  arc(599, 820, 15, 25, PI, TWO_PI);

  fill(180);
  arc(575, 825, 40, 35, PI, TWO_PI);

  fill(189);
  arc(589, 840, 35, 45, PI, TWO_PI);

  fill(180);
  arc(579, 855, 25, 35, PI, TWO_PI);

  fill(195);
  arc(579, 865, 25, 15, PI, TWO_PI);

  fill(189);
  arc(569, 875, 25, 25, PI, TWO_PI);

  fill(199);
  arc(569, 890, 15, 25, PI, TWO_PI);

  fill(189);
  arc(579, 895, 20, 15, PI, TWO_PI);

  fill(183);
  arc(560, 910, 10, 35, PI, TWO_PI);

  fill(195);
  arc(570, 925, 10, 25, PI, TWO_PI);

  fill(185);
  arc(555, 940, 20, 20, PI, TWO_PI);

  fill(198);
  arc(545, 960, 25, 20, PI, TWO_PI);

  fill(198);
  arc(545, 975, 15, 20, PI, TWO_PI);

  fill(198);
  arc(525, 985, 10, 15, PI, TWO_PI);

  fill(198);
  arc(535, 995, 15, 10, PI, TWO_PI);

  // ****

  fill(185);
  arc(419, 795, 30, 50, PI, TWO_PI);

  fill(190);
  arc(389, 810, 50, 45, PI, TWO_PI);

  fill(200);
  arc(420, 820, 15, 25, PI, TWO_PI);

  fill(180);
  arc(395, 825, 40, 35, PI, TWO_PI);

  fill(189);
  arc(389, 840, 35, 45, PI, TWO_PI);

  fill(180);
  arc(379, 855, 25, 35, PI, TWO_PI);

  fill(195);
  arc(379, 865, 25, 15, PI, TWO_PI);

  fill(189);
  arc(369, 875, 25, 25, PI, TWO_PI);

  fill(199);
  arc(369, 890, 15, 25, PI, TWO_PI);

  fill(189);
  arc(379, 895, 20, 15, PI, TWO_PI);

  fill(183);
  arc(360, 910, 10, 35, PI, TWO_PI);

  fill(195);
  arc(370, 925, 10, 25, PI, TWO_PI);

  fill(185);
  arc(355, 940, 20, 20, PI, TWO_PI);

  fill(198);
  arc(345, 960, 25, 20, PI, TWO_PI);

  fill(198);
  arc(345, 975, 15, 20, PI, TWO_PI);

  fill(198);
  arc(325, 985, 10, 15, PI, TWO_PI);

  fill(198);
  arc(335, 995, 15, 10, PI, TWO_PI);

  image(toad, 780, 480, 110, 170);
  image(pipe, 720, 720, 200, 300);
}