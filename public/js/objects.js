function Entity (x,y,size,speed,imgSrc) {
    this.x=x;
    this.y=y;
    this.size=size;
    this.imgSrc=imgSrc;
    //RECT
    this.rect=new Rect(x,y,this.size,this.size);
    this.dead=0;
    this.speed=speed;
    //image
    if (imgSrc!="") {
        this.animatedImage=new AnimatedImage("./images/enemy.png",5,3,0,0,0,0);
    };
    this.update=function  () {
        this.rect.set(this.x,this.y);
    };
    this.draw=function  (ctx) {
        //ctx.fillStyle="black";
        //this.rect.draw(ctx);
        this.drawImage(ctx);
    };
    this.drawImage=function  (ctx) {
        if (this.imgSrc!="") {
            this.animatedImage.draw(ctx,this.x,this.y);
        };
    };
};
function Obama (x,y,size,speed) {
    this.x=x;
    this.y=y;
    this.size=size;
    //this.imgSrc=imgSrc;
    //RECT
    this.rect=new Rect(x,y,this.size,this.size);
    this.dead=0;
    this.speed=speed;
    
    this.update=function  () {
        this.rect.set(this.x,this.y);
    };
    this.draw=function  (ctx) {
        ctx.fillStyle="black";
        this.rect.draw(ctx);
        //this.drawImage(ctx);
    };
    this.drawImage=function  (ctx) {
        
    };
    this.jump=function  (paramDic) {
        if (this.energy>0) {

        this.energy-=paramDic["jumpCost"];
        //sounds.dic["jump"].volume=0.5;
        //sounds.dic["jump"].play();
        this.stopJump= this.fartTime;
        //if (this.stopJump!=1&&this.yVector>this.jumpMax) {
        this.yVector=0;
        this.yVector-=this.jumpAcceleration;
        this.grounded=0;
       // };
        //if (this.yVector<=this.jumpMax) {
          //  this.stopJump=1;
           // this.yVector=this.jumpMax
        //};
        };
    };
};