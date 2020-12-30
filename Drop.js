class Drop {
    constructor(x,y){
    var options={
        isStatic:true,
        restitution:0.3,
        friction:0.1,
        density:1.2
    }
    
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 5;
    World.add(world, this.body);
    }
    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
}

update(){

}

ellipse(){
    
}

push(){
    for(var i=0; i<maxDrop; i++){
        Drop.push(new createDrop(random(0,400), random(0,400)));
    }
}
}