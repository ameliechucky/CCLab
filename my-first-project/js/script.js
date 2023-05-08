// alert('Hello!');
// function setup() {
//     let canvas = createCanvas(500, 500);
//     // canvas.parent("canvasContainer");
//     canvas.id("p5-canvas");
//     background(100);
// }
// function draw() {
//     noStroke();
//     fill(random(255),random(255), random(255),50 );
//     circle(random(width), random(height), 200); 
// }

let img;
function preload() {
  img = loadImage('img/img.png'); // dimensions of image are 50 x 50
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    image(img, 0, 0, width, height, 0, 0, img.width, img.height, CONTAIN, RIGHT,TOP);
}

// function setup() {
//     let canvas = createCanvas(windowWidth, windowHeight);
//     canvas.id("p5-canvas");
//     canvas.parent("p5-canvas-container");
//   }
  
//   function draw() {
//     noStroke();
//     fill(random(255), random(255), random(255), 30);
//     circle(random(width), random(height), 200);
//   }