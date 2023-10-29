var canvas0; var canvas; var canvas2; var canvas3; var canvas4; var canvas5; var canvas6;
var ctx0; var ctx; var ctx2; var ctx3; var ctx4; var ctx5; var ctx6;
var PX1; var PY1; var PX2; var PY2; var PX3; var PY3; var PX4; var PY4;
var bar=new Bar(0,550);
var NinjaX = 370;
var NinjaY = 450;
var circle=new Circle(NinjaX,NinjaY,6); //reset
//var dxBar=12;
var timer;
var KindevaImg;
var CloudImg;
var barImg;
var SmokeImg;
var SmokeName="S1";
var DevilDanceImg;
var DevilDeadImg;
var NinjaImg;
var PortalImg;
var Portal2Img;
var time=0.1; //reset
var speed=0; //reset
var speedO = 0;
var angle=1; //reset
var angleTemp=1;
var angleO=0;
var level=1; //reset
var levelO = 1;
var hitV =false;
var hitH = false;
var hitD = false;
var portalmade = false;
var gravity=10;
var delt = 0.01; //reset
var delx = 0.0001; //reset
var dely = 0.0001; //reset
var hookx = 500;
var hooky = 0;
var audio = new Audio('GameOver.mp3');
var projectile = new Audio('Projectile.mp3');
var AudioWin = new Audio('AudioWin.mp3');
var Bounce = new Audio('Bounce.mp3');
var CoinCollect = new Audio('Coin.mp3');
var whoosh = new Audio('whoosh.mp3');
var Jump = new Audio('Jump.mp3');
var Dead = new Audio('outofbounds.mp3');
var obstacles = new Array();
var Boxx1 = new Array();
var Boxx2 = new Array();
var Boxy1 = new Array();

var ballx; //reset
var bally; //reset
var ballx1; //reset
var bally1; //reset

var DemonAt=11;
var DemonX=750; 
var DemonY=500;
var DemonJump = 0;
var NinjaAt = 3;
var Cart=0;
var CartImg;
var CartActive=false;

var GoldImg1;
var GoldImg2;
var GoldImg3;
var Gold1At=11;
var Gold1X=750; 
var Gold1Y=500;
var Gold2At=11;
var Gold2X=750; 
var Gold2Y=500;
var Gold3At=11;
var Gold3X=750; 
var Gold3Y=500;
var LogoV1At=12;
var LogoH1At=7;
var LogoH2At=9;
var Portal2X;
var Portal2Y;
var PortalX;
var PortalY;
var Points=0;
var TotalPoints=0;
var Gold1Hit = false;
var Gold2Hit = false;
var Gold3Hit = false;
var ClearTxt = false;
var clickH = false;
var clickH1 = false;
var hookpressed = 0;
var shootpressed = false;
var RopeLength = 1;
var Omega = 0;
var Theta = 0;
var MaxTheta = 0;
var timeSHM = 0;
var portalActive = false;
var msg1;
var LevelMessage=true;
var Spic=0;
var Spic1=0;
var Nsmoke;


function listQ(){
  level = document.getElementById("level").value;
  DrawGuide();
  DemonJump = 0;
  LevelMessage=true;
  preInit();
  }

function clearText(){
  ctx2.clearRect(0,0,canvas2.width, canvas2.height);
  ctx5.clearRect(0,0,canvas2.width, canvas2.height);
  /*canvas6 = document.getElementById("canvas");
  ctx6 = canvas.getContext("2d");
  ctx6.fillText("Your Total Score" +TotalPoints, 500,20);
  ctx6.fillText("Score in last attempt" +Points, 500,40);*/
}

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
  ctx.fillStyle = "#FC8D86";
  ctx.arc(ballx1, bally1, c.r-2, 0, Math.PI*2, true);
  ctx.fill();
  
  ctx.beginPath();
  ctx.fillStyle = "#7756D";
  ctx.arc(ballx, bally, c.r-1, 0, Math.PI*2, true);
  ctx.fill();
  
  ctx.beginPath();
  ctx.fillStyle = "#B21E14";
  ctx.arc(c.x, c.y, c.r, 0, Math.PI*2, true);
  ctx.fill();
}



function DrawGuide() {
  
  if(shootpressed == false)
  {
    ctx7.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx6.clearRect(0, 0, canvas3.width, canvas3.height);
  
  preInit();
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx2.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx5.clearRect(0, 0, canvas3.width, canvas3.height);
    //ctx7.clearRect(0, 0, canvas3.width, canvas3.height);

    angleTemp= parseFloat(document.getElementById("Angle").value);

    var lx = NinjaX + 35 +((document.getElementById("Speed").value/5)*Math.cos(angleTemp));
    var ly = NinjaY + 35 -((document.getElementById("Speed").value/5)*Math.sin(angleTemp));

    angleTemp = 1.57 - angleTemp;
    ctx3.beginPath();
    ctx3.moveTo(NinjaX+35, NinjaY+35);
    ctx3.lineTo(lx, ly);
    ctx3.stroke();
    NinjaImg=document.getElementById("Ninja");

    PX1=(NinjaX+35)-30*Math.sin(angleTemp+0.2);
    PY1=(NinjaY+35)+30*Math.cos(angleTemp+0.2);
    PX2=(NinjaX+35)-30*Math.sin(angleTemp-0.2);
    PY2=(NinjaY+35)+30*Math.cos(angleTemp-0.2);

    PX3=(NinjaX+35)-30*Math.sin(angleTemp+3.14+0.1);
    PY3=(NinjaY+35)+30*Math.cos(angleTemp+3.14+0.1);
    PX4=(NinjaX+35)-30*Math.sin(angleTemp+3.14-0.1);
    PY4=(NinjaY+35)+30*Math.cos(angleTemp+3.14-0.1);

    ctx3.fillStyle = "#bc571a";;
    ctx3.beginPath();
    ctx3.moveTo(PX1,PY1);   // point 1
    ctx3.lineTo(PX2,PY2);  // point 2
    ctx3.lineTo(PX3,PY3);  // point 3
    ctx3.lineTo(PX4,PY4); // point 4
    ctx3.closePath();      // go back to point 1
    ctx3.fill();
    //assign the right ninja image
    
    NinjaSet=true;
  }
  }

  //this is where i make the hook
function Hook()
  {
    if (shootpressed == true)
    {
      if(level == 2)
      {
        ctx.beginPath(); 
        //ctx.globalAlpha = 0.2;             
        ctx.lineWidth = "4";
        ctx.moveTo(circle.x , circle.y);
        ctx.lineTo(hookx, hooky);
        ctx.stroke();
        hookpressed = hookpressed + 1;
        clickH = true;
        //clickH1 = true;
        //ctx.globalAlpha=1;
      }
      if (level == 6)
      {
        CartActive = false;
        CartImg = document.getElementById("CartOpen")
      }
    }
  }

function DrawLogos()
  {
    Logo1=document.getElementById("Logo1");
    Logo2=document.getElementById("Logo2");
    Logo3=document.getElementById("Logo3");
    ctx0.drawImage(Logo1, LogoH1At*canvas.width/26,canvas.height - obstacles[LogoH1At] + 20, 120, 45 );
    ctx0.drawImage(Logo2, LogoH2At*canvas.width/26,canvas.height - obstacles[LogoH2At] + 20, 120, 45  );
    ctx0.drawImage(Logo3, LogoV1At*canvas.width/26,canvas.height - obstacles[LogoV1At] + 20, 45, 240  );
  }


function init() {

  DevilDanceImg=document.getElementById("devilDance");
  //DevilDeadImg=document.getElementById("devilDead");

  ctx2.clearRect(0,0,canvas2.width, canvas2.height);
  ctx5.clearRect(0,0,canvas2.width, canvas2.height);
  canvas6 = document.getElementById("canvas");
  ctx6 = canvas.getContext("2d");
  timer=setInterval(draw, 10);

  projectile.play();
  return timer;
    
}

function Buy()
{
  if (TotalPoints >= 2000)
  {
    TotalPoints = TotalPoints-2000;
    ctx6.clearRect(0, 0, canvas.width, canvas.height);
  ctx6.fillText("Your Total Score: " +TotalPoints, 500,20);
  ctx6.fillText("Score in last attempt: " +Points, 500,40);
    circle= new Circle(NinjaX,NinjaY,10);
    drawBall(circle);
    
  }
  else
  {
    alert("you do not have enough coins to increase the size of your ball");
  }
}

function draw() {
//uncomment the following line   
//ctx.clearRect(0, 0, canvas.width, canvas.height);
/*
//this is where the smoke animation is played
  Spic1=Spic1+1;
  {
    if (Spic1<61)
        {
        if (Spic1%2==0)
            {
            Spic=Spic+1;
            SmokeName = "S"+Spic;
            //SmokeImg=document.getElementById(SmokeName);
            }
            SmokeImg=document.getElementById(SmokeName);
            ctx4.drawImage(SmokeImg, PX3-25, PY3-25, 50, 50);
            //Spic=1;
        }
        else{
          if (Spic1%25==0)
          {
          SmokeName="Sm"+Spic%6;
          SmokeImg=document.getElementById(SmokeName);
          }
          Spic1 = Spic1 + 1;
          ctx4.drawImage(SmokeImg, PX3-15, PY3-75, 30, 75);
        }
  }
*/ 

  //animateSmoke();

  ctx6.clearRect(0, 0, canvas.width, canvas.height);
  ctx6.fillText("Your Total Score: " +TotalPoints, 500,20);
  ctx6.fillText("Score in last attempt: " +Points, 500,40);


  drawBall(circle);
  if(portalmade == true)
  {
    ctx.drawImage(PortalImg, PortalX, PortalY-20, 20, 40);
    ctx.drawImage(Portal2Img, Portal2X, Portal2Y-20, 20, 40);
  }
  if((clickH == true) && (hookpressed == 1)){
    hookpressed = hookpressed-1;
  Hook();
  }
 

//move the ball by delx and dely
  MoveBall();
  
  ballx1 = ballx;
  bally1 = bally;

  ballx = circle.x;
  bally = circle.y;

  circle.x += delx;
  circle.y += dely;
  ctx.drawImage(barImg,bar.x,bar.y);



  ctx4.drawImage(DevilDanceImg,DemonX, DemonY,50,50);
  ctx.drawImage(NinjaImg, NinjaX, NinjaY,70,70);

  if(Gold1Hit == false){
  ctx.drawImage(GoldImg1, Gold1X, Gold1Y);}
  if(Gold2Hit == false){
  ctx.drawImage(GoldImg2, Gold2X, Gold2Y);}
  if(Gold3Hit == false){
  ctx.drawImage(GoldImg3, Gold3X, Gold3Y);}


  //this is where we check if the ball has crashed into an obstacle
  for (var i = 0; i < 26; i += 1) {
        if((circle.x > Boxx1[i]) && (circle.x < Boxx2[i]) && (circle.y > Boxy1[i])){
          //ENTERED FROM LEFT
          if (ballx < Boxx1[i]){
            hitV = true;
            delx=-delx;
            //Bounce.pause();
            //ctx2.drawImage(CLImg, ballx,bally,25,25)
            Bounce.play();
          }
          //ENTERED FROM right
          if (ballx > Boxx2[i]){
            hitV = true;
            delx=-delx;
            //Bounce.pause();
            //ctx2.drawImage(CRImg, ballx-25,bally,25,25)
            Bounce.play();
          }
          //ENTERED FROM top
          if (bally < Boxy1[i]){
            hitH = true;
            dely=-dely;
            //Bounce.pause();
            //ctx2.drawImage(CTImg, ballx,bally,25,25)
            Bounce.play();
          }
                       
        }
      }
   
      if((circle.x>DemonX) && (circle.x<DemonX+50) && (circle.y>DemonY) && (circle.y<DemonY+50)){
    
        //ctx.drawImage(DevilDeadImg,DemonX,DemonY);
        DevilDanceImg=document.getElementById("devilDead");
        hitD = true;
        //killDemon(DemonX, DemonY);
      
      }
  //this is where ball hits the ninja
  if((circle.x<NinjaX+50) && (circle.x>NinjaX) && (circle.y>NinjaY+36) && (circle.y<NinjaY+70) && (hitD == false))
  {
    clearTimeout(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    projectile.pause();
    levelO = +level;

    Dead.play();
    //timerDemonDead=setInterval(DeadDeamon, 10);
    //alert("Game Over");
    ctx2.font = "30px Arial";
    ctx2.fillText("DEAD", 300, 200);
    ctx2.fillText("400 points deducted", 200, 100);
    TotalPoints = TotalPoints -400;
    ClearTxt=true;
    getReady();
  }
  
  //this is where ball enters portal1
  if (portalmade == true)
  {
      if((circle.x>PortalX) && (circle.x<PortalX+30) && (circle.y>PortalY) && (circle.y<PortalY+30) )
      {
        //whoosh.play();
        portalActive = true;
        circle.x=PortalX;
        circle.y=PortalY;

      }

      if ((portalActive == true)  && (circle.x!=Portal2X) && (circle.y!=Portal2Y))
      {
        delx = (Portal2X - PortalX)/40;
        dely = (Portal2Y - PortalY)/40;
      }
      if ((circle.x == Portal2X) && (circle.y==Portal2Y) )
      {
        portalActive = false;
      }
  }


   //this is where ball enters Cart
   if (Cart != 0)
   {
      if((circle.x>CartX) && (circle.x<CartX+40) && (circle.y>CartY) && (circle.y<CartY+50))
      {
        CartActive = true;
        circle.x = CartX + 25;
        circle.y = CartY + 55;
        angle = 0;
        speed = 2;
        time = 0;
      }
  }
  //this is where the coins are hit
  if((circle.x>Gold1X) && (circle.x<Gold1X+20) && (circle.y>Gold1Y) && (circle.y<Gold1Y+20) && (Gold1Hit == false)){
    
     Points = Points+10;
     Gold1Hit = true;
     CoinCollect.play();
     ctx2.fillText("+10", circle.x, circle.y-5);
     ctx2.strokeStyle = "black";
     ctx2.clearRect(500,0,1000,100);
     ctx6.clearRect(0,0,canvas2.width, canvas2.height);
     ctx6.fillText("Your Total Score: " +TotalPoints, 500,20);
     ctx6.fillText("Score in last attempt: " +Points, 500,40);
     ctx6.strokeStyle = "black";
  }
  if((circle.x>Gold2X) && (circle.x<Gold2X+20) && (circle.y>Gold2Y) && (circle.y<Gold2Y+20) && (Gold2Hit == false)){
    
    Points = Points+10;
    Gold2Hit = true;
    CoinCollect.play();
    ctx2.fillText("+10", circle.x, circle.y-5);
    ctx2.strokeStyle = "black";
    ctx2.clearRect(500,0,1000,100);
    ctx6.clearRect(0,0,canvas2.width, canvas2.height);
    ctx6.fillText("Your Total Score: " +TotalPoints, 500,20);
    ctx6.fillText("Score in last attempt: " +Points, 500,40);
     ctx6.strokeStyle = "black";
  }
  if((circle.x>Gold3X) && (circle.x<Gold3X+20) && (circle.y>Gold3Y) && (circle.y<Gold3Y+20) && (Gold3Hit == false)){
    
     Points = Points+10;
     Gold3Hit = true;
     CoinCollect.play();
     ctx2.fillText("+10", circle.x, circle.y-5);
     ctx2.strokeStyle = "black";
     ctx2.clearRect(500,0,1000,100);
     ctx6.clearRect(0,0,canvas2.width, canvas2.height);
     ctx6.fillText("Your Total Score: " +TotalPoints, 500,20);
     ctx6.fillText("Score in last attempt: " +Points, 500,40);
     ctx6.strokeStyle = "black";
  }


  //this is where ball is below the bar
  if(circle.y>bar.y) // && (hitD == false)
  {
    clearTimeout(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    projectile.pause();
    HitH = false;

    //this is where the demon is killed
    if(hitD == true)
    {
      killDemon(DemonX, DemonY);

    }
    else
    {

      audio.play();      
      ctx2.font = "30px Arial";
      ctx2.fillText("FAIL - ball hits the ground", 300, 200);
      ClearTxt=true;
      levelO = +level;
      getReady();
    }
  }
  

  //this is where ball is above game space
  if((circle.y<0) && (hitD == false))
  {
    clearTimeout(timer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    projectile.pause();

    Dead.play();
    //alert("Game Over");
    //ctx2.font = "30px Arial";
    //ctx2.fillText("FAIL - Ball over the sky", 300, 200);
    msg1="FAIL - Ball over the sky";
    printMessage(msg1,1);
    ClearTxt=true;
    levelO = +level;
    getReady();
  }

}


function ReadInputs() {
    if ((circle.x == NinjaX+35) && (circle.y == NinjaY))
        {
        shootpressed = true;  
        speed = document.getElementById("Speed").value;
        speedO = speed;
        angle = document.getElementById("Angle").value;
        angleO = angle;
        level = document.getElementById("level").value;
        levelO = +level;
        LevelMessage = false;
        gravity = 10;
        init(); }
        } 
 
   
 
  function MoveBall()
  {
    if (hookpressed != 1) 
    {
    if(hitV == true){
      angle = 3.14-angle;
      Jump.play();
    }
            
    if (hitH == true){
      if (delx > 0){
        angle = -(Math.atan(((dely/1.732)/delx)));
        speed = (Math.sqrt(delx*delx + dely*dely/9)/delt);
        time=delt;
      
      }
      else
      {
        angle = 3.14-(Math.atan(((dely/1.732)/delx)));
        speed = (Math.sqrt(delx*delx + dely*dely/9)/delt);
        time=delt;
      }
    }
    if ((CartActive == false) && (portalActive == false))
    {
    delx = speed*Math.cos(angle)*delt + (windSpeed/2);
    dely = (speed*Math.sin(angle)*delt)*(-1) + (gravity*time*time/2); 
    }
  }
    else if (hookpressed == 1)
    {
      if (clickH1 == false)
      {
      RopeLength = Math.sqrt((circle.x-500)*(circle.x-500)+(circle.y)*(circle.y));
      //TimePeriod = 2*3.14*Math.sqrt(RopeLength/gravity);
      timeSHM= 0;
      MaxTheta = Math.asin((500-circle.x)/RopeLength);
      Omega = Math.sqrt(180*gravity/RopeLength);
      
      //clickH;
      }
      clickH1 = true;
      Theta = MaxTheta*(Math.cos(Omega*timeSHM));
      circle.x1 = 500-(RopeLength*Math.sin(Theta));
      circle.y1 = RopeLength*(Math.cos(Theta));
      delx = (circle.x1 - circle.x)-0.01;
      dely = (circle.y1 - circle.y)-0.01;
      timeSHM += delt;

      /*for (var i = 0; i < 26; i += 1) {
        if((circle.x > Boxx1[i]) && (circle.x < Boxx2[i]) && (circle.y > Boxy1[i])){
          //ENTERED FROM LEFT
          if (ballx < Boxx1[i]){
            hitV = true;
            RopeLength = RopeLength - Math.sqrt((500 -((i+1)*20))*(500 -((i+1)*20)) + (obstacles[i])*(obstacles[i]));
            MaxTheta = Math.asin((500-circle.x)/RopeLength);
      Omega = Math.sqrt(180*gravity/RopeLength);
      //hookx = 500 -((i+1)*20);
      //hooky = 800 - (obstacles[i]);
        //hookpressed = hookpressed + 1;
        //clickH = true;
            //Bounce.pause();
            //ctx2.drawImage(CLImg, ballx,bally,25,25)
            //Hook();
            Bounce.play();
          }
          //ENTERED FROM right
          if (ballx > Boxx2[i]){
            hitV = true;
            delx=-delx;
            RopeLength = RopeLength - Math.sqrt((500 -(i*20))*(500 -(i*20)) + (800- obstacles[i])*(800 - obstacles[i]));
            MaxTheta = Math.asin((500-circle.x)/RopeLength);
      Omega = Math.sqrt(180*gravity/RopeLength);
      //hookx = (i+1)*20;
      //hooky = 800 - (obstacles[i]);
      //Hook();
            //Bounce.pause();
            //ctx2.drawImage(CRImg, ballx-25,bally,25,25)
            Bounce.play();
          }                       
        }
      }*/
            // doing the following to maintain the motion after hook is unpressed
      time = delt;
      
      angle = -(Math.atan(dely/delx));
      
      if (delx < 0)
      {
        angle = 3.14 + angle; 
      }
      speed = (Math.sqrt(delx*delx + dely*dely)/delt);
      
    }
     


    hitV = false;
    hitH = false;
    time += delt;
  }

  function getReady(){
    if(hitD == true)
    {
      ctx2.font = "20px Arial";
      ctx2.fillText("You are a sharp shooter!", 300, 350);
    }
    else
    {
      ctx2.font = "20px Arial";
      ctx2.fillText("oops you missed!", 300, 350);
    }
//reset all variables for next shot
    circle.x = NinjaX+35;
    circle.y= NinjaY+35;
    delx = 0.1;
    dely = 0.1;
    ctx7.clearRect(0, 0, canvas7.width, canvas7.height);
    ctx6.clearRect(0, 0, canvas3.width, canvas3.height);

    time=0.1; //reset
    speed = parseFloat(document.getElementById("Speed").value); //re read
    angle = parseFloat(document.getElementById("Angle").value); //re read
 
    ballx = NinjaX;
    bally = NinjaY;

    Spic=0;
    Spic1=0;

    Gold1Hit = false;
    Gold2Hit = false;
    Gold3Hit = false;

    Points = 0;
    LevelMessage = false;
    if (level != parseInt(levelO))
    {
      LevelMessage=true;
    }
    level = parseInt(levelO);
    
    hitD = false;
    clickH = false;
    clickH1 = false;
    hookpressed = 0;
    shootpressed = false;
    hookx = 500;
    hooky = 0;
    
    DrawGuide();
    preInit();
    
  }