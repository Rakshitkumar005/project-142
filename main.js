song1="";
song2="";
leftWristx="";
leftWristy="";
rightWristx="";
rightWristy="";

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
}

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3")
}

function draw(){
    image(video,0,0,600,400);
}


function modelLoaded(){
    console.log("Pose Net Is Loaded")
}

function gotResults(results){
    if(results.length>0){
       console.log(results);
    
       leftWristx=results[0].pose.leftWrist.x;
       leftWristy=results[0].pose.leftWrist.y;
       console.log("Left Wrist X= "+leftWristx+"Left Wrist Y= "+leftWristy);

       rightWristx=results[0].pose.rightWrist.x;
       rightWristy=results[0].pose.rightWrist.y;
       console.log("Right Wrist X= "+rightWristx+"Right Wrist Y= "+rightWristy);
    }
}