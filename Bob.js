class Bob
{
    constructor(x, y, radius)
    {
        var options = 
        {
            isStatic: false,
            restitution: 1.3,
            friction: 10,
            density: 2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius;
        this.height = radius;
        World.add(world, this.body);

    }

    display()
    {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}