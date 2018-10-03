function Obstacle(canvas, posX, posY, isParking ){
  var self = this;
  self.ctx = canvas.getContext("2d");
  self.posX = posX;
  self.posY = posY;
  self.width = 45;
  self.heigth = 20;
  self.direction= 1;
  self.isParking = isParking;
  self.initialPosX = posX;
  self.initialWidth = self.width; 
  self.growDir = 1;
  self.carts= false;
}
var imgFinish = new Image();
imgFinish.src = src="img/finish-line.png";
var imgObs = new Image();
imgObs.src = src="img/car1-hor.png";
var imgCarts= new Image();
imgCarts.src = src="img/carts.png";

Obstacle.prototype.draw = function(){
  var self = this;
  if( self.isParking === true){
    self.width = 80;
    self.heigth = 36;
    self.ctx.drawImage(imgFinish,self.posX ,self.posY,self.width,self.heigth);
  } else if(self.carts === true){
    self.ctx.drawImage(imgCarts,self.posX ,self.posY,self.width,self.heigth);
  }
   else{
  self.ctx.drawImage(imgObs,self.posX ,self.posY,self.width,self.heigth);
  }
};

Obstacle.prototype.move = function(){
  var self = this;
  self.posX += self.direction;
  if ( self.posX === (self.initialPosX +60) ){
   self.direction = -1;
  } else if( self.posX === self.initialPosX){
    self.direction = 0.5;
  }
}
Obstacle.prototype.grow = function(){
  var self = this;
  self.width += self.growDir;
  if ( self.width === (self.initialWidth +60) ){
   self.growDir = -0.5;
  } else if( self.width === self.initialWidth){
    self.growDir = 1;
  }
}