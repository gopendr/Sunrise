const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg="sunrise1.png" ;

function preload() {
     getBackgroundImg( ) 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg) 

    }

    Engine.update(engine);

    // write code to display time in correct format here
         fill("orange");
         textSize(25);
         if(hour>=12){
            text("time"+hour%12+"pm",1000,50)

         } 
         else if(hour === 0){
            text("time:12am",1000,50)

         } 
         else {
            text("time"+hour%12+"am",1000,50) 
         }
}

async function getBackgroundImg(){

   var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
   var responseJson=await response.json()
   var datetime=responseJson.datetime
   var hour=datetime.slice(11,13)
   if(hour>=04 && hour>=06){
       debugger;
       bg=sunrise1.png
       
   }
   else if(hour>=06 && hour>=08){
    debugger;
    bg=sunrise2.png
    
}
else if(hour>=08 && hour>=11){
    debugger;
    bg=sunrise3.png
    
}
else if(hour>=11 && hour>=13){
    debugger;
    bg=sunrise4.png
    
}
else if(hour>=13 && hour>=15){
    debugger;
    bg=sunrise5.png
    
}
else if(hour>=15 && hour>=17){
    debugger;
    bg=sunrise6.png
    
}
else if(hour>=17 && hour>=19){
    debugger;
    bg=sunrise7.png
    
}
else if(hour>=19 && hour>=21){
    debugger;
    bg=sunrise8.png
    
}
else if(hour>=21 && hour>=23){
    debugger;
    bg=sunrise9.png
    
}
else if(hour>=23 && hour>=01){
    debugger;
    bg=sunrise10.png
    
}
else if(hour>=01 && hour>=04){
    debugger;
    bg=sunrise11.png
    
}
backgroundImg=loadImage(bg);
}
