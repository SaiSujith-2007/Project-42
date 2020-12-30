class Umbrella {
    constructor(x,y){
    this.animation=loadAnimation(images/WalkingFrame/"walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
    World.add(world, this.body);
    }
    display(){
        fill("white");
        animationMode(ANIMATION);
        animation(this.animation,this.body.position.x, this.body.position.y, this.radius, this.radius);
}
}