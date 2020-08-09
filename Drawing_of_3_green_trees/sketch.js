function setup() {
  createCanvas(600, 400);

}

function draw() {
// height refers to the actual canvas height

  stroke(100);
  background(51)
  strokeWeight(4);
  translate(200, height)
  branch(100)

}

function branch(len) {

  line(0,0,0, -len)
  line(0, height, 200, height -len)
  translate(0, -len)
  rotate(PI / 4)
  if ( len > 4) {

    branch(len *.67)

  }
}
