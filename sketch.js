const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope1,rope2,rope3,rope4,rope5;
var ground;
var ball1,ball2,ball3,ball4,ball5;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);
    
    ball1 = new Ball(500,250,80,80);
    ball2 = new Ball(580,250,80,80);
    ball3 = new Ball(660,250,80,80);
    ball4 = new Ball(740,250,80,80);
    ball5 = new Ball(820,250,80,80);

    rope1 = new Rope(ball1.body,{x:500,y:50})
    rope2 = new Rope(ball2.body,{x:580,y:50})
    rope3 = new Rope(ball3.body,{x:660,y:50})
    rope4 = new Rope(ball4.body,{x:740,y:50})
    rope5 = new Rope(ball5.body,{x:820,y:50})
}

function draw(){
    background("white");
    Engine.update(engine);
    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}