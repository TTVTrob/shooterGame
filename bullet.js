class bullet {
  constructor(x,y,width,height){
    var options = {
      isStatic: true,
  }
    this.image = loadImage("bullet1.png");
    this.smokeImage = loadImage("images.png");
    this.trajectory =[];
    this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
  }

  display() {
    this.body.position.x = mouseX;
    push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    pop(); 
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}