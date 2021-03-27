class Paper{
    constructor(x,y){
    var options = { 
        isStatic : false, 
        restitution: 0.3, 
        friction:0, 
        density: 1.2

    }
        this.x=x
		this.y=y
		this.body=Bodies.circle(x, y, 50,  options);
 		World.add(world, this.body);
        this.image=loadImage("paper.png")
    }
   display(){
    var pos=this.body.position;

			

    push()
    translate(pos.x, pos.y);
    imageMode(CENTER)
    //strokeWeight(4);
    image(this.image, 0 , 0, 70, 70);
    //rect(0,0,this.wallThickness, this.dustbinHeight);
    pop()

   }
}
