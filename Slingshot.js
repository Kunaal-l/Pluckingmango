class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.boy = loadImage('boy.png');
        this.boy.scale = 0.2;
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }
   
    display(){
        image(this.boy,200,20,100,150);
     
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x , pointA.y, pointB.x , pointB.y);
            push();
            stroke(48,22,8);
            pop();
        }
    }
    
}