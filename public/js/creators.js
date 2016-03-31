//GAME CREATORS
//PRELOAD IMAGES
preloadImages(
"./images/mainMenu.png"
);
//AUDIO SOURCES
function getAudioSrcList () {
	return [
        "./sounds/button.wav"
    ];
};
//MAINMENU///////////////////////////////////////////
function getMainMenuBG () {
	var bgObj=[
	new BackgroundVisualObject(imgSource="./images/mainMenu.png",animatedImages=[])
	];
	return bgObj;
};
function getMainMenuMenuObjects (argument) {
	var menuObj=[
	new Button("start",125,254,150,60,function func () {master.prepareObjects("exlination","none")} )
	];
	return menuObj;
};
//STAGE//////////////////////////////////////////////
function getStageBG (which) {
	var bgObj=[
	//new ScrollingBG(["./images/bg2.png","./images/bg2.png"],"right",1/8,windowWidth=400)
	];
	return bgObj;
};
function getStageMenuObjects (which) {
	var menuObj=[
	//make new Button (text,x,y,w,h,onclick)
	];
	return menuObj;
};
//GAME STATS
function getGameAttributes (which) {
	var attributes={
		"gravity":1,
		//BLOOD STATS
		"bloodAmount":30,
		"bloodBaseSize":6,
		"bloodSizeVariance":110,
		"bloodSpeedVariance":18,
		"bloodSplatter":1,
		"bloodYmax":20,
		"chickenBloodRatio":2,
	};
	return attributes;
};
var startDist=110;
function getGameObjects (which) {
	var menuObj={
	"player":[new Obama(50,300,60,1,"imgSrc")],
	"enemy":[],
	"bloodDrops":[]
	};
	return menuObj;
};