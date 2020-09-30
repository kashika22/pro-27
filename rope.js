class rope{
    constructor(bodyA, bodyB,offsetX,offsetY)
    {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);

        var anchor1X = pointA.x
        var anchor1Y = pointA.y

        var anchor2x = pointB.x+this.offsetX
        var anchor2y = pointB.y+this.offsetY

        line(anchor1X,anchor1Y,anchor2x,anchor2y);
    }
    
}