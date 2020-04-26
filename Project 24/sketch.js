const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var box1,box2,turret;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,360,200,50);
    box2 = new Box(100,345,180,100);

    ground = new Ground(600,390,1200,20);
    turret = new Ground(240,260,100,30);

    
}

function draw(){
    background('white');
    Engine.update(engine);
    
    box1.display();
    box2.display();
    turret.display()
    

    ground.display();   
}