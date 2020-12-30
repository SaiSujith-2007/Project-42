var maxDrop=100;
var umbrella1;
var thunder, thunderImage;

function preload(){
    
}

function setup(){
   createCanvas(400,400);
    umbrella1=new Umbrella();
}

function draw(){
    background(0);
    umbrella1.diaplay();
}   

