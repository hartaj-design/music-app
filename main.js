song="";
song2="";
scoreleftwrist=0;
scorerightwrist=0;
rightwristy="";
rightwristx="";
leftwristy="";
leftwristx="";
function preload(){
    song=loadSound("jattsong.mp3");
    song2=loadSound("taaresong.mp3");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    load3=ml5.poseNet(video,modelloaded);
    load3.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has been loaded");

}
function gotposes(results){
    if(results.length>0){
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
 
    }
}
function draw(){
    image(video,0,0,600,400);
    if(scoreleftwrist>0.2){
        circle(leftwristx,leftwristy,20);
    cloack=Number(leftwristy);
    door=floor(cloack);
    volume=door/500;
    song.setVolume(volume);
    document.getElementById("volume").innerHTML="volume= "+volume;
    }
    if(scorerightwrist>0.2){
        circle(rightwristx,rightwristy,20);
        if(rightwristy>0 && rightwristy<=100){
            document.getElementById("speed").innerHTML="speed=0.5x";
            song.rate(0.5);
        }
        else if(rightwristy>100 && rightwristy<=200){
            document.getElementById("speed").innerHTML="speed=1x";
            song.rate(1);
        }
        else if(rightwristy>200&& rightwristy<=300){
            document.getElementById("speed").innerHTML="speed=1.5x";
            song.rate(1.5);
        } 
        else if(rightwristy>300 && rightwristy<=400){
            document.getElementById("speed").innerHTML="speed=2x";
            song.rate(2);
        }
        else if(rightwristy>400){
            document.getElementById("speed").innerHTML="speed=2.5x";
            song.rate(2.5);
        }
    }
    }
    function play(){
        song.play();
        song.setVolume(1);
        song.rate(1);
    }