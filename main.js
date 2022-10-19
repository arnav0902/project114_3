nose_x=0;
nose_y=0;

function preload(){

mustach=loadImage('https://i.postimg.cc/7LWZvSR6/images.png')

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("poseNet is loaded");

}

function gotPoses(results)
{  if(results.length > 0)  { 
    nose_x=results[0].pose.nose.x-15;
    nose_y=results[0].pose.nose.y-15;
       console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);  }
}
function draw(){
    image(video,0,0,300,300);
    image(mustach,nose_x,nose_y,30,30);

   

}

function TakeSnapshot(){
save("picture.png");
}