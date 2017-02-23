//p5

var cursor;
var patchs = [];
var circuit;
var patchNum = 10;
var arrTest = [];
var mousePos;
var wire;

function setup() {
    createCanvas(windowWidth, windowHeight);

    //initialize
    cursor = new Cursor;

    for (var i = 0; i < patchNum; i++) {
        patchs.push(new Patch());
        arrTest.push(patchs[i]);
        // console.log(patchs[i].type);
        // patchs[i].play();
    }

    circuit = new Circuit(arrTest);

    wire = new Wire(patchs[0], patchs[1]);
}

function mouseClicked(){
  patchs[1].play();
  console.log("mouse");

}
function draw() {
    background(240);
    mousePos = createVector(mouseX, mouseY);
    for (var i = 0; i < patchs.length; i++) {
        patchs[i].update();
        patchs[i].display();
        patchs[i].playTone();
    }

    circuit.display();
    cursor.display();
    wire.update();
    wire.display();

}

var Cursor = function() {
    //visual variables
    this.pos = createVector(0, 0);
    //tonjs variables

    //function
    this.update = function() {
        this.pos = createVector(mouseX, mouseY);
    }

    this.display = function() {
        stroke(255, 0, 0, 30);
        strokeWeight(1);
        line(0, 0, mouseX, mouseY);
        rectMode(CENTER);
        push();
        translate(mouseX, mouseY);
        rotate(PI / 4);
        noStroke();
        fill(255, 0, 0);
        rect(0, 0, 10, 10);
        pop();
    }
}
