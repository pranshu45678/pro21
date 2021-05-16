var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   surface1=createSprite(50,580,150,20)
   surface1.shapeColor="blue"
   surface2=createSprite(190,580,150,20)
   surface2.shapeColor="yellow"
   surface3=createSprite(530,580,150,20)
   surface3.shapeColor="green"
   surface4=createSprite(360,580,150,20)
   surface4.shapeColor="orange"

    //create box sprite and give velocity
box=createSprite(random(20,700),100,40,40)
box.shapeColor="white";
box.velocityX=5;
box.velocityY=7;

    
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    drawSprites();
box.bounceOff(edges)
    //add condition to check if box touching surface and make it box

if(box.isTouching(surface1) && box.bounceOff(surface1)) {
    box.shapeColor="blue"
if(box.isTouching(surface2) && box.bounceoff(surface2)) {
   box.shapeColor="yellow"
   if(box.isTouching(surface3) && box.bounceoff(surface3)) {
   box.shapeColor="orange"
   if(box.isTouching(surface4) && box.bounceoff(surface4)) {
       box.shapeColor="green"
   }



   }




}


}
}   
    

    




    