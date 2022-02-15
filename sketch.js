let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(100);

  fill(255, 255,0);
  strokeWeight(2);
  stroke(24,31,22);
  point(100,100);
  line(180,5,185,500);

  strokeWeight(3);
  ellipse(100,125,90,90);

  strokeWeight(3);
  var y = 90 + 20*Math.sin(PI*j/20)
  var r = 100 + 10*Math.sin(PI*j/20)
  j += 0
  ellipse(270,125,r,r);
  

  //GAMBAR KIRI
  strokeWeight(10);
  point(80,122);
  point(120,122);

  //GAMBAR KANAN
  point(250, 122);
  point(290,122);

  strokeWeight(3);
  //noStoke()
  
  arc(100,135,50,50, radians(730), radians(170) );
  arc(270,135,50,50, radians(730), radians(170) );


  //Topi

  fill(189, 248, 255)
  ellipse(100, 80, 90,40)

  fill( 189, 248, 255)
  var y = 90 + 20*Math.sin(PI*j/20)
  var r = 100 + 10*Math.sin(PI*j/20)
  j += 1
  ellipse(270, 80, r, 40);



for (var i=0; i<=400; i++){
  x=i
  y=20+7*Math.sin(PI*x/7)
  point(x,y)
}

//Kiri
point(130, 80);
point(125, 70);
point(120, 80);

//Kanan

strokeWeight(3);
fill(287,88,20);
point(305, 80);
point(301, 70);
point(295, 80);

fill(500, 120, 20)
strokeJoin(ROUND)
triangle(145,135,160,155,175,135)
triangle(145,135,160,155,175,1350)
triangle(145,1350,160,155,175,135)


}