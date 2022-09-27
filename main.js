leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    canvas = createCanvas(500, 500);
    canvas.position('center');
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}

function draw(){

}

function modelLoaded(){
    console.log("Model Loaded.")
}

function draw(){
    textSize(difference);
    text("Football practice is on the oval", 50, 200);
}
function gotPoses(){
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX); 
}