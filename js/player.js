class Player{
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.posX = this.ctx.canvas.width*0.1;
    this.posY = this.ctx.canvas.height*0.1;
    this.dx = 0;
    this.dy = 0;
    this.vel = 4.5;
    this.friction = 0.1;
    this.impulse = 3;
    this.width = this.ctx.canvas.width*0.12;
    this.heigth = this.ctx.canvas.height*0.09;
    this.imgPlayer = null;
  }

  initialimg () {
    let self = this;
    let imgPlayer = new Image;
    imgPlayer.src = src="img/player-rigth.png";
  }

  setDirection (dx, dy) {
    let self = this;
  
    self.dx = dx;
    self.dy = dy;
  }

  setImpulse (impulse) {
    let self = this;
    self.impulse = impulse;
  }
  
  draw() {
    let self = this;
    self.ctx.drawImage(imgPlayer,self.posX,self.posY,self.width,self.heigth);
  }

  update() {
    let self = this;
  
    self.posX += self.impulse * self.vel * self.dx;
    self.posY += self.impulse * self.vel * self.dy;
  
    if (self.impulse > 0) {
      self.impulse -= self.friction;
    } else {
      self.impulse = 0;
    }
  }


  checkCollision (obs) {
    var self = this;
  
    var crashRight = self.posX + self.width > obs.posX;
    var crashBottom = self.posY + self.heigth> obs.posY;
    var crashTop = self.posY < obs.posY + obs.heigth;
    var crashLeft = self.posX < obs.posX + obs.width;
  
    if (crashLeft && crashRight && crashTop && crashBottom) {
      return true;
    }
  }

  collide (obs){
    var self = this;
    self.posX += (self.impulse * self.vel)/4  -self.dx*2.5;
    self.posY += (self.impulse * self.vel)/4  -self.dy*2.5;
  }

  finish(obs) {
    var self = this;
    var leftSide = self.posX >= obs.posX;
    var rightSide = self.posX + self.width <= obs.posX + obs.width;
    var upSide = self.posY >= obs.posY;
    var downSide = self.posY + self.heigth <= obs.posY + obs.heigth;
    
    if (leftSide && rightSide && upSide && downSide) {
      return true;
    }
  }
}


const soundPlayer = new Audio;
soundPlayer.src= src=('snd/ruum.mp3');
const soundHorn = new Audio;
soundHorn.src = src=('snd/horn.mp3');



