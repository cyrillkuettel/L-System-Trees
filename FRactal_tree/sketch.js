var ast = {
  //make branch in 3d
increment: 4,
 angle: 0,

  branch:  function(x, y) {
    //
    // underlying structure = line(x1, y1, x2, y2)
    this.x = x
    this.y = y

    stroke(255);
    strokeWeight(4);
    line(0,0,-1,0)

  },

  rotate : function() {
    a += increment;
    // rotate PI /
    4
  }
}
var height

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
  console.log(height)
  line(0,0,0, -len)
  line(0, height, 200, height -len)
  translate(0, -len)
  rotate(PI / 4)
  if ( len > 4) {

    branch(len *.67)

  }
}
