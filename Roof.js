class Roof
{
    constructor(x, y)
    {
        var options = 
        {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 350, 20, options);
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, 350, 20);
    }
}