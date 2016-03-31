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
    this.speed=0;
    this.energy=100;

    this.yVector=0;
    this.yMax=28;

    this.jumpAcceleration=18;
    this.jumpMax=-46;
    this.stopJump=0;
    this.fartTime=40;
    
    this.update=function  (paramDic) {
        //

        
        this.y+=this.yVector;
        if (this.yVector>0) {
            this.stopJump=1;
        };
        if (this.yVector<this.yMax) {
            this.yVector+=paramDic["gravity"];
        };
        if (this.y>300) {
            this.y=300;
            this.stopJump=1;
            this.grounded=1;
        };
        
        //image frames
        
        //

        if (this.stopJump>=1) {
            this.stopJump-=1;
        };
        
        this.rect.set(this.x-10,this.y-10);
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
        

        //this.energy-=paramDic["jumpCost"];
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