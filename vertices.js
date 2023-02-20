//please provide the p5.js code for a geometric shape which changes the number of vertices based on the mouse x,y position
//chatGPT response:
//Sure, here's an example p5.js code that creates a geometric shape with a variable number of vertices based on the position of the mouse:

let numVertices = 3; // starting number of vertices
let radius = 100; // radius of the shape

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // map mouse position to number of vertices
  numVertices = map(mouseX, 0, width, 3, 12);
  // calculate angle between vertices
  let angle = TWO_PI / numVertices;
  // calculate vertices and draw shape
  beginShape();
  for (let i = 0; i < numVertices; i++) {
    let x = radius * cos(angle * i);
    let y = radius * sin(angle * i);
    vertex(width/2 + x, height/2 + y);
  }
  endShape(CLOSE);
}

//This code sets the initial number of vertices to 3 and the radius of the shape to 100. In the draw() function, 
// it maps the x-position of the mouse to a range of 3 to 12, which becomes the new number of vertices. 
// It then calculates the angle between each vertex based on the number of vertices, 
//and uses this angle to calculate the x and y coordinates of each vertex on the circle. 
//Finally, it draws the shape using the beginShape() and endShape() functions. 
//The CLOSE argument to endShape() ensures that the shape is closed.
