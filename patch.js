var Patch = function() {
    //visual variables
    this.pos = createVector(random(0, width), random(0, height));
    this.voltage = 0;
    this.flag = false;
    this.color = color(0, 0, 0);
    this.isPlayed = false;


    //tonejs variables
    //type(0_LED, 1_RESITOR, 2_LED_SERIAL, 3_)
    this.type = floor(random(0, 4));
    this.play = function(){
      var player = new Player(this.type);
      player.fire();
    }

    //functions
    this.checkFlag = function() {
        var d = this.pos.dist(mousePos);
        if (d < 50) {
            this.flag = true;
        } else {
            this.flag = false;
        }

    }
    this.update = function() {
        //check the flag and change patch color and voltage
        this.checkFlag();
        if (this.flag) {
            this.color = color(255, 0, 0);
            this.voltage = 100;
        } else {
          if(this.isPlayed){
            this.color = color(0, 0, 0);
            this.voltage = 0;
          }else{
            this.color = color(220, 220, 220);
            this.voltage = 0;
          }
        }
    }

    this.display = function() {
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, 50, 50);
    }

    this.playTone = function() {
      if(this.flag && !this.isPlayed){
        this.play();
        this.isPlayed = true;
      }
    }
}
