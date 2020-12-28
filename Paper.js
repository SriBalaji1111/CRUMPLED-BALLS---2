class Paper {

  constructor(x, y, radius) {

    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:0.8,
      }

   this.radius = radius
   this.image=loadImage("paper.png");
   this.body=Bodies.circle(x,y, (this.radius-20)/2, options)     
    World.add(world, this.body);
  }

  display(){
    
    var pos =this.body.position;
   
    push()
    translate(pos.x, pos.y);
    rectMode(CENTER);

    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop()
  }
 };
