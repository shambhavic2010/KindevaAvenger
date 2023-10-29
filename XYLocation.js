// this is the backup from BouncingBall.js

var canvas;
var ctx;
var dx = 2;
var dy = 4;
var bar=new Bar(400,500);
var circle=new Circle(400,30,10);
var dxBar=12;
var timer;
var barImg;
function Bar(x,y){
  this.x=x;
  this.y=y;
}
function Circle(x,y,r){
  this.x=x;
  this.y=y;
  this.r=r;
}
function drawBall(c) {
  ctx.beginPath();
  ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, true);
  ctx.fill();
}
function doKeyDown(e){
  if(e.keyCode==37){
    if(bar.x-dxBar>0)
      bar.x-=dxBar;
  }
  else if(e.keyCode==39){
    if(bar.x+dxBar<canvas.width)
      bar.x+=dxBar;
  }
}

function init() {
  window.addEventListener("keydown",doKeyDown,false);
  barImg=document.getElementById("bar");
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  timer=setInterval(draw, 10);

  return timer;
    
}

function draw() {
   // ReadInputs();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#FAF7F8";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#003300";
  drawBall(circle);

  //this is where ball is hitting the vertical boundaries
  if (circle.x +dx > canvas.width || circle.x +dx < 0)
    dx=-dx;

//this is where the ball bounces off the bar
  if(circle.y+dy>bar.y && circle.x>bar.x && circle.x<bar.x+barImg.width)
    dy=-dy;
 
 
    //if (circle.y +dy > canvas.height || circle.y +dy < 0)
    if (circle.y +dy < 0)
    dy=-dy;

//move the ball by dx and dy
  circle.x += dx;
  circle.y += dy;
  ctx.drawImage(barImg,bar.x,bar.y);

  //this is where ball is below the bar
  if(circle.y>bar.y){
    clearTimeout(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    alert("Game Over");
  }
}

function ReadInputs() {
    if (dx<0) 
    {
        var temp = document.getElementById("Speed").value;
        dx=-temp;
    }
    else 
    {
        var temp = document.getElementById("Speed").value;
        dx = temp
    }
    if (dy<0) 
    {
        var temp = document.getElementById("Speed").value;
        dy = temp*(-2)
    }
    else
    {
        var temp = document.getElementById("Speed").value;
        dy = temp*2
    } 
    //dx = document.getElementById("Speed").value;
    //dy = 2*dx;
   
    }
 
  