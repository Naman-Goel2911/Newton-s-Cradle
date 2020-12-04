class Rope 
{
    constructor(bodyA, bodyB, offsetX)
    {
        this.offsetX = offsetX;

        var options =
        {
            bodyA: bodyA,
            bodyB: bodyB,
        }
            this.rope = Constraint.create(options);
            World.add(world, this.rope);

    }

    display()
    {
        if(this.rope.bodyA)
        {
            push();
            strokeWeight(5);
    
            line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x + this.offsetX, this.rope.bodyB.position.y);
            pop();
        }

        
    }

    fly()
    {
        this.rope.bodyA = null;
    }
}