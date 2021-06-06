Nose_X = 0

Nose_Y = 0

function preload(){clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")}

function setup(){

canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
PoseNet = ml5.poseNet(video,modelLoaded)
PoseNet.on('pose' ,Got_poses)
}

function modelLoaded(){

console.log("model Loaded")

}

function Got_poses(results){

if(results.length > 0 ){
console.log(results)
Nose_X = results[0].pose.nose.x - 25
Nose_Y = results[0].pose.nose.y 
console.log(Nose_Y)
}

}

function draw(){

image(video,0,0,300,300)

image(clown_nose,Nose_X,Nose_Y,60,30)

}

function download(){

save("My_Filter_Image.png")

}