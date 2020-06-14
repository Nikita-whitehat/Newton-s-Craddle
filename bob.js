class Bob {
    constructor(x,y){
        var options ={
            //isStatic:false
            restitution:1,
            friction:0,
            frictionAir:0
        }
        this.body = Bodies.circle(x,y,35,options)

        this.radius = 35;

        World.add(world,this.body);
    }
    display(){

     var pos = this.body.position;
     
        fill("purple")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
