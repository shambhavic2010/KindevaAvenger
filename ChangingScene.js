
var deltScene = 0.008;
var timeScene = 0;
var CartX=0;
var CartY=50;
var CloudX=0;
var CloudY=180;
var k=0;
var m=5;
var m1=0;
var rand1=0; var rand2=0; var rand3=0; var rand4=0;

function drawScene()
{
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    //NinjaImg=document.getElementById("Ninja5");
  
        CloudX=CloudX + windSpeed;
        if (CloudX> canvas.width){
            CloudX=-200;
        }
        if (CloudX<-200)
        {
            CloudX=canvas.width;
        }


    if ((level==2)&&(hookpressed==false))
        {
            if (m1==0)
            {
            rand1 = Math.floor(Math.random() * 6) + 1;
            rand2 = Math.floor(Math.random() * 10) + 1;
            rand3 = Math.floor(Math.random() * 15) + 1;
            rand4 = Math.floor(Math.random() * 25) + 1;
            }
            
            ctx4.beginPath();
            ctx4.lineWidth = "3";

            ctx4.moveTo(500,0);
            
            ctx4.lineTo(500+rand1, 10);
            
            ctx4.lineTo(500+rand2, 30);
            
            ctx4.lineTo(500+rand3, 50);
            
            ctx4.lineTo(500+rand4, 80);

            ctx4.lineTo(500+rand1, 110);
            
            ctx4.lineTo(500+rand2, 130);
            
            ctx4.lineTo(500+rand3, 150);
            
            ctx4.lineTo(500+rand4, 180);
            
            ctx4.stroke();

            m = m + 1;
            m1 = m % 15;
            
        }

    if (level == 5)
    {
        //alert("moving demon");
    DemonY = DemonY - (DemonJump*6) + (5*timeScene*timeScene);
    if (DemonY > canvas.height - obstacles[DemonAt] - 60)
    {
      timeScene = 0;
    }
    timeScene += deltScene;
    }

    //this is where the cart is moving on the rail
    if (Cart != 0)
    {
        ctx4.beginPath();
        //ctx2.fillStyle = "#800070";
        ctx4.lineWidth = "2";
        ctx4.moveTo(0,51);
        ctx4.lineTo(canvas.width,51);
        ctx4.stroke();

    ctx4.drawImage(CartImg,CartX,CartY,50,65);
    CartX += 2;
        if (CartX > canvas.width)
        {
            CartX = 0;
        }
    }

    ctx4.drawImage(DevilDanceImg,DemonX, DemonY,50,50);
    ctx4.drawImage(CloudMoveImg,CloudX, CloudY,200,150);
    ctx4.drawImage(CloudMoveImg,CloudX+200, CloudY+75,100,75);
}

function printMessage(msg1, font)
{
    if (font ==1)
    {
        ctx2.globalAlpha=0.5;
        ctx2.beginPath();
        ctx5.font = "20px Arial";
        ctx5.strokeStyle = "#173b79";
        ctx2.fillStyle = 'rgba(250,250,250,0.99)';
        ctx2.roundRect(100, 150, 800, 200, [5, 10]);
    }
    ctx2.fill();
    ctx5.drawImage(KindevaImg,125, 155);
    ctx5.fillText(msg1, 300, 200);
    ctx2.stroke();
    ctx2.globalAlpha=1

}

function killDemon(a,b)
{
    DemonX=a;
    DemonY=b;

    DevilDanceImg=document.getElementById("devilDead");
    //timerDemonDead=setInterval(DeadDeamon, 10);
    
    
      AudioWin.play();

      TotalPoints = TotalPoints + Points + 500;
      ctx2.font = "20px Arial";
      ctx2.fillText("You are a sharp shooter!", 300, 350);
      ctx2.clearRect(500,0,1000,100);

      //ctx2.globalAlpha = 0.4;
      //ctx2.fillRect(550,5,950,55);
      ctx6.clearRect(0,0,canvas2.width, canvas2.height);
      ctx6.fillText("Your Total Score" +TotalPoints, 600,30);
      ctx6.fillText("Score in last attempt" +Points, 600,50);
      ClearTxt=true;

      levelO = +level + 1;
      document.getElementById("level").value = levelO;
      getReady();
}

function DeadDeamon()
{
    
    if (k <2) 
    {
      alert("wah");
      ctx4.clearRect(0, 0, canvas.width, canvas.height);
      DevilDanceImg.style.transform = 'rotate(10deg)';
      ctx4.drawImage(DevilDanceImg,DemonX, DemonY,50,50);  
      k=k+1;
    }
    return timerDemonDead;
    
}