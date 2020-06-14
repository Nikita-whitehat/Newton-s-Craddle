class Rope{
    constructor(bodyA, pointB){

       // this.offSetX = offSetX;
        //this.offSetY = offSetY;

        var options = {
            bodyA: bodyA,
            pointB: pointB
        }
        //this.bodyB = bodyB
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("brown")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        }
    }