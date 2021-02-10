class Tree{
    constructor(x,y) {
      var options = {
          isStatic: true
         // image_x = x,
         // image_y = y
      }
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
      //this.image_x = this.body.position.x
      //this.image_y = this.body.position.y 
     
    }
    display(){
     
      var pos =this.body.position.x;
      var poss = this.body.position.y;
      rectMode(CENTER);
      image(this.image,pos,poss);
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };