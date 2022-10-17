noseX = 0;
noseY = 0;
difference=0;
leftWristX = 0;
rightWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.centre;

    poseNet = ml5.poseNet(video,modelLoaded);   
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model is loaded");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log("got poses");
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = " + noseX + "nosex" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

console.log("leftWristX =" + leftWristX +"rightWristX = " + rightWristX + "difference =" + difference);

    }
}

function draw()
{
    background("pink");

    document.getElementById("square_side").innerHTML = "width and height of a text will be ="+difference + "px";
    fill("blue");
    stroke("red");
    textSize(difference);
    text("kripa",noseX,noseY);

}
