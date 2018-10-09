class Obtacle{
  constructor(canvas, posX, posY, isParking){
    this.ctx = canvas.getContext("2d");
    this.posX = posX;
    this.posY = posY;
    this.width = this.ctx.canvas.width*0.15;
    this.heigth = this.ctx.canvas.height*0.12;
    this.direction= 1;
    this.isParking = isParking;
    this.initialPosX = posX;
    this.initialWidth = this.width; 
    this.growDir = 1;
    this.carts= false;


    draw (){
      var self = this;
      if( self.isParking === true){
        self.width = self.ctx.canvas.width*0.19;
        self.heigth = self.ctx.canvas.width*0.115;
        self.ctx.drawImage(imgFinish,self.posX ,self.posY,self.width,self.heigth);
      } else if(self.carts === true){
        self.ctx.drawImage(imgCarts,self.posX ,self.posY,self.width,self.heigth);
      }
       else{
      self.ctx.drawImage(imgObs,self.posX ,self.posY,self.width,self.heigth);
      }
    };

    move(){
      var self = this;
      self.posX += self.direction;
      if ( self.posX === (self.initialPosX +(self.ctx.canvas.width*0.15)) ){
       self.direction = -3;
      } else if( self.posX === self.initialPosX){
        self.direction = 2;
      }
    }


  }


row(){
  var self = this;
  self.width += self.growDir;
  if ( self.width === self.initialWidth+(self.ctx.canvas.width*0.2) ){
   self.growDir = -3;
  } else if( Math.round(self.width) === Math.round(self.initialWidth)){
    self.growDir = 2;
  }
}

}

const imgFinish = new Image();
imgFinish.src = src="img/finish-line.png";
const imgObs = new Image();
imgObs.src = src="img/car1-hor.png";
const imgCarts= new Image();
imgCarts.src = src="img/carts.png";



