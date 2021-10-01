class Man  {
    constructor(x,y,width,height){
      var options = {
        isStatic: true
    }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("gun.gif");
      World.add(world, this.body);
    }
  
    display() {
      // if(this.body.mousePressed < 3){
      //   super.display();
      //  }
      this.body.position.x = mouseX;
      push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); 
    }
  }