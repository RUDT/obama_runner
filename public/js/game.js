function Game (stage,attributes,objects) {
	//OBJECTS
	this.currentVisualObjects=getStageBG(stage);
	this.currentMenuObjects=getStageMenuObjects(stage);
	//mechanical variables for map
	this.repeated=0;
	this.timeStep=0;
	this.stage=stage;
	//ADD STAGE IF EXISTS
	if (stage!="") {this.stageData=mapData[stage];};
	//TIMERS
	this.timers=[];
	//this.timers.push(new TimedEvent (time,countDownBy,parent,onZero) );

	//GAME ATTRIBUTES DIC & GAME OBJECTS DIC
	this.gameAttributes=attributes;
	this.gameObjects=objects;
	//
	this.gameAttributes={
		"drainRate":1/40,
		"jumpCost":8,
		"gravity":1,
		"boostAdd":50,
		//BLOOD STATS
		"bloodAmount":30,
		"bloodBaseSize":10,
		"bloodSizeVariance":110,
		"bloodSpeedVariance":20,
		"bloodSplatter":40,
		"bloodYmax":20,
		"chickenBloodRatio":2,
	};
	this.obama=new Obama(50,300,80,1,"imgSrc");
	this.update=function  (input,param) {
		//UPDATE OBJECTS
		for (var i = this.currentMenuObjects.length - 1; i >= 0; i--) {
			this.currentMenuObjects[i].update(input);
		};
		for (var i = this.currentVisualObjects.length - 1; i >= 0; i--) {
			this.currentVisualObjects[i].update();
		};
		//UPDATE OBJECTS IN DICT
		for (var key in this.gameObjects) {
			for (var i = this.gameObjects[key].length - 1; i >= 0; i--) {
				this.gameObjects[key][i].update(this.gameAttributes);
				//REMOVE IF DEAD
				if (this.gameObjects[key][i].dead==1) {
					this.gameObjects[key].splice(i,1);
					continue;
				};
			};
		};
		//UPDATE TIMED EVENTS
		for (var i = this.timers.length - 1; i >= 0; i--) {
			this.timers[i].update();
		};
		//GAME SPECIFIC////////////////////////////////////////////////////////////////////////////////////////

		//COLLISION EVENTS
		/*CollisionHandler ("playerToEnemy",this.gameObjects["players"],this.gameObjects["enemies"],
			this,"collidedWithEnemy",rectCollision);
		*/
		//EventTrigger (1,">",0,this.func) 
    };
    this.draw=function  (ctx) {
    	for (var i = this.currentVisualObjects.length - 1; i >= 0; i--) {
			this.currentVisualObjects[i].draw(ctx);
		};

		//DRAW OBJECTS IN DICT
		for (var key in this.gameObjects) {
			for (var i = this.gameObjects[key].length - 1; i >= 0; i--) {
				this.gameObjects[key][i].draw(ctx);
			};
		};

		for (var i = this.currentMenuObjects.length - 1; i >= 0; i--) {
			this.currentMenuObjects[i].draw(ctx);
		};
    };
    this.bloodSplatter=function  (color,initialX,initialY) {
    	console.log("blood")
    	//Add blood purple
		for (var i = this.gameAttributes["bloodAmount"] ; i >= 0; i--) {
			var r=Math.random();
			var r2=Math.random();
			var r3=Math.random();
			var rr1=Math.random();
			var rr2=Math.random();
			
			var sx=r*this.gameAttributes["bloodSpeedVariance"] ;
			var sy=r2*this.gameAttributes["bloodSpeedVariance"] ;
			
			if (rr1>0.5) {
				sx=sx*-1;
			};
			if (rr2>0.5) {
				sy=sy*-1;
			};
			
			var r4=Math.random();
			var x=initialX-(this.gameAttributes["bloodSplatter"] /2)+(this.gameAttributes["bloodSplatter"]*r4)
			var r5=Math.random();
			var y=initialY-(this.gameAttributes["bloodSplatter"]/2)+(this.gameAttributes["bloodSplatter"]*r5)
			this.gameObjects["bloodDrops"].push(new BloodDrop(x,y,this.gameAttributes["bloodBaseSize"]*r3,sx,sy,this.gameAttributes["bloodYmax"],color) );
		};
    };
   
	this.stageEnded=function  (argument) {
		console.log("stage finished");
	};
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//CUSTOM/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//body..


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//CUSTOMEND//////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};