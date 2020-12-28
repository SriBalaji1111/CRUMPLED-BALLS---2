class Bin {

    constructor(x,y) {

      this.x = x;
      this.y = y;
      this.dustbinWidth = 200;
      this.dustbinHeight = 213;
      this.wallThickness = 20;
      

      this.bottomWall = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
      this.leftWall = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
      this.rightWall = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
      
      this.image=loadImage("dustbingreen.png");

      World.add(world,this.bottomWall);
      World.add(world,this.leftWall);
      World.add(world,this.rightWall);
     }
     
     display(){
      var pos = this.bottomWall.position;
 
      push();
      translate(pos.x,pos.y+10);
      fill(255);
      stroke(255);
      imageMode(CENTER);
      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
  };
