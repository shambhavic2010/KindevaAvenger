var timerScene;
var windSpeed=0;
var timerDemonDead;
var win=1;
var NinjaSet=false;
var CLImg; var CRImg; var CTImg;


function gameSetup(){

    preInit();

    timeScene = 0;
    timerScene=setInterval(drawScene, 10);
    return timerScene;
}


function preInit(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    KindevaImg=document.getElementById("KindevaLogo");
    //level = levelO;
  
      if (level == 1){
        CloudImg=document.getElementById("Cloud1");
        CloudMoveImg=document.getElementById("CloudMove");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = 50;
        obstacles[5] = 60;
        obstacles[6] = 80;
        obstacles[7] = 180;
        obstacles[8] = 250;
        obstacles[9] = 260;
        obstacles[10] = 190;
        obstacles[11] = 280;
        obstacles[12] = 250;
        obstacles[13] = 180;
        obstacles[14] = 190;
        obstacles[15] = 125;
        obstacles[16] = 90;
        obstacles[17] = 80;
        obstacles[18] = 60;
        obstacles[19] = 40;
        obstacles[20] = 20;
        obstacles[21] = -50;
        obstacles[22] = -50;
        obstacles[23] = -50;
        obstacles[24] = -50;
        obstacles[25] = 800;
  
      NinjaAt = 4;
      DemonAt = 14;
      Gold1At = 17;
      Gold2At = 12;
      Gold3At = 7;
      LogoV1At = 11;
      LogoH1At = 4;
      LogoH2At= 8;
  
      PortalX = 200;
      PortalY = 300;
  
      Portal2X = 500;
      Portal2Y = 200;
  
      portalmade = true;
      Cart = 0;

      windSpeed=-1;
      }
      else if (level == 2){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = 25;
        obstacles[6] = 20;
        obstacles[7] = 180;
        obstacles[8] = 80;
        obstacles[9] = 20;
        obstacles[10] = 20;
        obstacles[11] = 20;
        obstacles[12] = 30;
        obstacles[13] = 20;
        obstacles[14] = 90;
        obstacles[15] = 125;
        obstacles[16] = 120;
        obstacles[17] = 280;
        obstacles[18] = 180;
        obstacles[19] = 20;
        obstacles[20] = 20;
        obstacles[21] = 20;
        obstacles[22] = -50;
        obstacles[23] = 120;
        obstacles[24] = 140;
        obstacles[25] = 800;
        NinjaAt = 12;
        DemonAt = 20;
        portalmade = false;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if (level == 3){
        CloudImg=document.getElementById("Cloud3");
        CloudMoveImg=document.getElementById("CloudMove3");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = 25;
        obstacles[6] = 20;
        obstacles[7] = 180;
        obstacles[8] = 80;
        obstacles[9] = 20;
        obstacles[10] = 20;
        obstacles[11] = 220;
        obstacles[12] = 30;
        obstacles[13] = 20;
        obstacles[14] = 90;
        obstacles[15] = 25;
        obstacles[16] = 20;
        obstacles[17] = 180;
        obstacles[18] = 80;
        obstacles[19] = 20;
        obstacles[20] = -50;
        obstacles[21] = -50;
        obstacles[22] = -50;
        obstacles[23] = -50;
        obstacles[24] = -50;
        obstacles[25] = 800;
  
        NinjaAt = 6;
        DemonAt = 13;
        portalmade = false;
  
        LogoV1At = 11;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=-0.1;
      }
      else if (level == 4){
        CloudImg=document.getElementById("Cloud4");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = 25;
        obstacles[6] = 20;
        obstacles[7] = 180;
        obstacles[8] = 280;
        obstacles[9] = 20;
        obstacles[10] = 20;
        obstacles[11] = 20;
        obstacles[12] = 30;
        obstacles[13] = 20;
        obstacles[14] = 90;
        obstacles[15] = 25;
        obstacles[16] = 20;
        obstacles[17] = 180;
        obstacles[18] = 80;
        obstacles[19] = 20;
        obstacles[20] = 20;
        obstacles[21] = 20;
        obstacles[22] = -50;
        obstacles[23] = -50;
        obstacles[24] = -50;
        obstacles[25] = 800;
  
        NinjaAt = 7;
        DemonAt = 8;
        portalmade = false;
        windSpeed=2.5;

        LogoV1At = 8;
        LogoH1At = 5;
        LogoH2At= 10;
        Cart = 0;
      }
      
      else if (level == 5)
      {
        CloudImg=document.getElementById("Cloud5");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = 25;
        obstacles[6] = 20;
        obstacles[7] = 180;
        obstacles[8] = 80;
        obstacles[9] = 20;
        obstacles[10] = 20;
        obstacles[11] = 20;
        obstacles[12] = 30;
        obstacles[13] = 20;
        obstacles[14] = 90;
        obstacles[15] = 25;
        obstacles[16] = 20;
        obstacles[17] = 180;
        obstacles[18] = 80;
        obstacles[19] = 20;
        obstacles[20] = 20;
        obstacles[21] = -50;
        obstacles[22] = -50;
        obstacles[23] = -50;
        obstacles[24] = -50;
        obstacles[25] = 800;
        NinjaAt = 5;
        DemonAt = 10;
        portalmade = false;
        windSpeed=0.1;
        DemonJump = 1;
        Cart = 0;
        
      }

      else if (level == 6)
      {
        CloudImg=document.getElementById("Cloud6");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = 350;
        obstacles[6] = 20;
        obstacles[7] = 180;
        obstacles[8] = 80;
        obstacles[9] = 20;
        obstacles[10] = 20;
        obstacles[11] = 20;
        obstacles[12] = 30;
        obstacles[13] = 20;
        obstacles[14] = -50;
        obstacles[15] = -50;
        obstacles[16] = -50;
        obstacles[17] = 180;
        obstacles[18] = 80;
        obstacles[19] = 20;
        obstacles[20] = 20;
        obstacles[21] = 400;
        obstacles[22] = 100;
        obstacles[23] = -50;
        obstacles[24] = -50;
        obstacles[25] = 800;
        NinjaAt = 5;
        DemonAt = 22;
        portalmade = false;
        windSpeed=0.1;
        DemonJump = 0;
        Cart = 1;
        
      }
      else if (level == 7){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = -25;
        obstacles[6] = -20;
        obstacles[7] = -180;
        obstacles[8] = -80;
        obstacles[9] = 20;
        obstacles[10] = -20;
        obstacles[11] = -20;
        obstacles[12] = 180;
        obstacles[13] = -20;
        obstacles[14] = -90;
        obstacles[15] = 20;
        obstacles[16] = -120;
        obstacles[17] = -280;
        obstacles[18] = -180;
        obstacles[19] = -20;
        obstacles[20] = -20;
        obstacles[21] = -20;
        obstacles[22] = -50;
        obstacles[23] = -120;
        obstacles[24] = -140;
        obstacles[25] = 800;
        NinjaAt = 9;
        DemonAt = 15;
        portalmade = false;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if (level == 8){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = -25;
        obstacles[6] = -20;
        obstacles[7] = -180;
        obstacles[8] = -80;
        obstacles[9] = 20;
        obstacles[10] = -20;
        obstacles[11] = -20;
        obstacles[12] = 280;
        obstacles[13] = -20;
        obstacles[14] = -90;
        obstacles[15] = 20;
        obstacles[16] = -120;
        obstacles[17] = -280;
        obstacles[18] = -180;
        obstacles[19] = -20;
        obstacles[20] = -20;
        obstacles[21] = -20;
        obstacles[22] = -50;
        obstacles[23] = -120;
        obstacles[24] = -140;
        obstacles[25] = 800;
        NinjaAt = 9;
        DemonAt = 15;
        portalmade = false;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if (level == 9){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = -25;
        obstacles[6] = -20;
        obstacles[7] = -180;
        obstacles[8] = 20;
        obstacles[9] = 20;
        obstacles[10] = 240;
        obstacles[11] = 200;
        obstacles[12] = 160;
        obstacles[13] = 120;
        obstacles[14] = 80;
        obstacles[15] = 20;
        obstacles[16] = 20;
        obstacles[17] = -280;
        obstacles[18] = -180;
        obstacles[19] = -20;
        obstacles[20] = -20;
        obstacles[21] = -20;
        obstacles[22] = -50;
        obstacles[23] = -120;
        obstacles[24] = -140;
        obstacles[25] = 800;
        NinjaAt = 8;
        DemonAt = 15;
        portalmade = false;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if (level == 10){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = -25;
        obstacles[6] = -20;
        obstacles[7] = -180;
        obstacles[8] = -80;
        obstacles[9] = 20;
        obstacles[10] = -20;
        obstacles[11] = 400;
        obstacles[12] = 20;
        obstacles[13] = -20;
        obstacles[14] = -90;
        obstacles[15] = 440;
        obstacles[16] = -120;
        obstacles[17] = 40;
        obstacles[18] = 20;
        obstacles[19] = 20;
        obstacles[20] = -20;
        obstacles[21] = -20;
        obstacles[22] = -50;
        obstacles[23] = -120;
        obstacles[24] = -140;
        obstacles[25] = 800;
        NinjaAt = 11;
        DemonAt = 19;
        portalmade = false;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if (level == 11){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = -25;
        obstacles[6] = -20;
        obstacles[7] = -180;
        obstacles[8] = -80;
        obstacles[9] = 20;
        obstacles[10] = -20;
        obstacles[11] = 200;
        obstacles[12] = 20;
        obstacles[13] = 260;
        obstacles[14] = -90;
        obstacles[15] = 20;
        obstacles[16] = -120;
        obstacles[17] = 300;
        obstacles[18] = 20;
        obstacles[19] = 80;
        obstacles[20] = -20;
        obstacles[21] = -20;
        obstacles[22] = -50;
        obstacles[23] = -120;
        obstacles[24] = -140;
        obstacles[25] = 800;
        NinjaAt = 11;
        DemonAt = 19;
        portalmade = false;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if (level == 12){
        CloudImg=document.getElementById("Cloud2");
        CloudMoveImg=document.getElementById("CloudMove2");
        obstacles[0] = 800;
        obstacles[1] = -50;
        obstacles[2] = -50;
        obstacles[3] = -50;
        obstacles[4] = -50;
        obstacles[5] = -25;
        obstacles[6] = -20;
        obstacles[7] = -180;
        obstacles[8] = -80;
        obstacles[9] = 20;
        obstacles[10] = -20;
        obstacles[11] = -20;
        obstacles[12] = 180;
        obstacles[13] = -20;
        obstacles[14] = -90;
        obstacles[15] = 20;
        obstacles[16] = -120;
        obstacles[17] = -280;
        obstacles[18] = -180;
        obstacles[19] = -20;
        obstacles[20] = -20;
        obstacles[21] = -20;
        obstacles[22] = -50;
        obstacles[23] = -120;
        obstacles[24] = -140;
        obstacles[25] = 800;
        NinjaAt = 9;
        DemonAt = 15;

        PortalX = 400;
        PortalY = 400;
  
        Portal2X = 600;
        Portal2Y = 400;
  
        portalmade = true;
  
        LogoV1At = 17;
        LogoH1At = 5;
        LogoH2At= 8;
        Cart = 0;
        windSpeed=0.5;
      }
      else if(level == 13){alert ("This level is locked. Send Rs. 100 to my Swiss bank account to continue playing")};
  
      canvas0 = document.getElementById("canvas0");
      canvas2 = document.getElementById("canvas2");
      canvas3 = document.getElementById("canvas3");
      canvas4 = document.getElementById("canvas4");
      canvas5 = document.getElementById("canvas5");
      canvas7 = document.getElementById("canvas7");
      canvas6 = document.getElementById("canvas6");

      ctx0 = canvas0.getContext("2d");
      ctx2 = canvas2.getContext("2d");
      ctx3 = canvas3.getContext("2d");
      ctx4 = canvas4.getContext("2d");
      ctx5 = canvas5.getContext("2d");
      ctx7 = canvas7.getContext("2d");
      ctx6 = canvas6.getContext("2d");

      ctx0.drawImage(CloudImg,0,0);
      ctx6.clearRect(0,0,canvas2.width, canvas2.height);
      ctx6.fillText("Your Total Score: " +TotalPoints, 500,20);
      ctx6.fillText("Score in last attempt: " +Points, 500,40);


      if(portalmade == true)
      {
        PortalImg=document.getElementById("portal");
        ctx0.drawImage(PortalImg, PortalX, PortalY-20, 20,40);
  
        Portal2Img=document.getElementById("portal");
        ctx0.drawImage(Portal2Img, Portal2X, Portal2Y-20, 20, 40);
        ctx7.beginPath();
        ctx7.globalAlpha=0.2;
        ctx7.moveTo(PortalX+16, PortalY);
        ctx7.lineTo(Portal2X+4, Portal2Y);
        ctx7.lineWidth = 15;
        ctx7.lineCap = "round"
        ctx7.strokeStyle = '#808080';
        ctx7.stroke();
      }
      
     
      CartImg=document.getElementById("Cart");
      CLImg=document.getElementById("CL");      
      CRImg=document.getElementById("CR");      
      CTImg=document.getElementById("CT");
     
      barImg=document.getElementById("bar");
      ctx.drawImage(barImg,bar.x,bar.y);
  
      NinjaX = (NinjaAt)*canvas.width/26;
      NinjaY = canvas.height - obstacles[NinjaAt] - 50;
  
      circle.x = NinjaX+35;
      circle.y = NinjaY;
      if (NinjaSet==false)
      {
      NinjaImg=document.getElementById("Ninja");
      }
      ctx.drawImage(NinjaImg,NinjaX, NinjaY,70,70);
      drawRect(obstacles);
  
      DemonX = (DemonAt)*canvas.width/26;
      DemonY = canvas.height - obstacles[DemonAt] - 50;
  
   
      DevilDanceImg=document.getElementById("devilDance");
      ctx4.drawImage(DevilDanceImg, DemonX, DemonY, 50, 50);
  
      Gold1X = (Gold1At)*canvas.width/26 + 5;
      Gold1Y = canvas.height - obstacles[Gold1At] - 12;
  
      GoldImg1=document.getElementById("Gold");
      ctx.drawImage(GoldImg1, Gold1X, Gold1Y);
  
      Gold2X = (Gold2At)*canvas.width/26 + 5;
      Gold2Y = canvas.height - obstacles[Gold2At] - 12;
  
      GoldImg2=document.getElementById("Gold");
      ctx.drawImage(GoldImg2, Gold2X, Gold2Y);
  
      Gold3X = (Gold3At)*canvas.width/26 + 5;
      Gold3Y = canvas.height - obstacles[Gold3At] - 12;
  
      GoldImg3=document.getElementById("Gold");
      ctx.drawImage(GoldImg3, Gold3X, Gold3Y);
      DrawLogos();
      if (LevelMessage==true)
      {
                  if (level == 1)
            {
                msg1="Welcome to KINDEVAs kingdom! Your job is to kill the asuras."
                font=1;
                printMessage(msg1, font)
            }

            if (level == 2)
            {
                msg1="In this level, you have a rope to swing on. Try it - press Hook"
                font=1;
                printMessage(msg1, font)
            }

            if (level == 3)
            {
                msg1="In this level, you are on your own"
                font=1;
                printMessage(msg1, font)
            }

            if (level == 4)
            {
                msg1="Wach the Wind"
                font=1;
                printMessage(msg1, font)
            }

            if (level == 5)
            {
                msg1="Watch out, the Demon is jumping around"
                font=1;
                printMessage(msg1, font)
            }

            if (level == 6)
            {
                msg1="You can ride the cart. To release - press Hook"
                font=1;
                printMessage(msg1, font)
            }
      }

  }
  
//this is where we draw the obstacles
function drawRect(obstacles) {
    
  for (var i = 0; i < 26; i += 1) 
  {
  ctx0.fillStyle = "#000000";
  ctx0.fillRect(canvas.width/26*(i),canvas.height-obstacles[i], canvas.width/26, obstacles[i]);
  Boxx1[i] = canvas.width/26*(i);
  Boxx2[i] = canvas.width/26*(i+1);
  Boxy1[i] = canvas.height-obstacles[i];
  if ((i%2 != 0) && (i !=25))
        {
        win1 = obstacles[i]/30;
            for (var j = 0; j < win1; j += 1)
            {
                ctx0.fillStyle = "#fffee9"
                ctx0.fillRect(canvas.width/26*(i)+5,canvas.height-obstacles[i]+(30*j)+20,canvas.width/26 -20, 10 );
            }
        }
  }
  
}