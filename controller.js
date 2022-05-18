const _video_1 = "videos/actividad-previa-1.mp4";
const _video_2 = "videos/animales.mp4";
const _video_3 = "videos/armas.mp4";
const _video_4 = "videos/droga.mp4";
const _video_5 = "videos/transporte.mp4";

let img;
let video_1;
let wd, hg;
let lineWidth = 1000 / 5;
let lineHeigh = 100;
let blocks;
let leverImg;
let v1,v2,v3,v4,v5;

let vidIsPlaying;
let playButton;
let prog_bar;
let your_progress=0;

function preload() {
    video_1 = createVideo(_video_1, );
    video_1.volume(1);
    video_2 = createVideo(_video_2);
    video_2.volume(1);
    video_3 = createVideo(_video_3);
    video_3.volume(1);
    video_4 = createVideo(_video_4);
    video_4.volume(1);
    video_5 = createVideo(_video_5);
    video_5.volume(1);
  
    img = loadImage("imagenes/petro-caricatura.png");
    
  }


  
function setup() {

    background(255, 204, 0);
    // wd= 1920;
    // hg=1080;
    vidIsPlaying= true;
    // playButton = createImg("imagenes/PausaBotton.png");   

    prog_bar_x = null;
    // prog_bar =  createImg("imagenes/avance_1.png");
    // prog_bar.position(wd*0 , hg*0.2);
    prog_bar = document.getElementById("prog_bar");
    pause_btn = document.getElementById("pause_btn");
    pause_btn.addEventListener('click', playPause);
   
    wd = displayWidth;
    hg = displayHeight;
    createCanvas(wd, hg);


    console.log("wd: "+wd + " hg: "+hg)

    // playButton.position(wd/9 , hg/1.4);
    // playButton.mousePressed(playPause);
    // prog_bar.position(wd/6+20 , hg -750);
    
    
    // prog_bar.resize(wd, hg);
    


    blocks = [
        { x: wd / 6,                 y: hg - 300, width: lineWidth, height: lineHeigh, color: "white", active: false },
        { x: wd / 6 + lineWidth,     y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(130, 130, 90)", active: false },
        { x: wd / 6 + lineWidth * 2, y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(130, 130, 130)", active: false },
        { x: wd / 6 + lineWidth * 3, y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(90, 130, 90)", active: false },
        { x: wd / 6 + lineWidth * 4, y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(90, 90, 90)", active: false },
      ];
    leverImg = {x: wd / 6, y: hg - 300, width: lineWidth, height: lineHeigh, active: false}

    
    v1 =true;     
    video_1.hide();
    // video_1.loop();
    video_1.play();

    video_2.hide();
    // video_2.loop();

    video_3.hide();
    // video_3.loop();
    
    video_4.hide();
    // video_4.loop();

    video_5.hide();
    //video_5.loop();

    video_1.onended(progress)   
    video_2.onended(progress)
    video_3.onended(progress)
    video_4.onended(progress)
    video_4.onended(progress)
  }



function timeLine() {

if (blocks.length > 0) {
    // console.log(blocks.length);
    
    for (let i = 0; i < blocks.length; i++) {
        let block = blocks[i];
        // console.log( blocks[i]);
        // noStroke();
        fill(block.color);
        rect(block.x, block.y, block.width, block.height);
    }
}

}

function slider() {
    let imgi = image(img, leverImg.x, leverImg.y, leverImg.width, leverImg.height);
  }

function mousePressed() {
    let distance= dist(mouseX, mouseY, leverImg.x, leverImg.y);

	if(distance<100){
        leverImg.active=true;
        
    }
    else{
        leverImg.active=false;
    }
  // Prevent default functionality.
  return false;
}

function mouseDragged() {
	console.log(leverImg.active);
	if (leverImg.active   ) {
        leverImg.x = mouseX;
        change_escene();
        
	}

  // Prevent default functionality.
  return false;
}
function change_escene(){
    if (blocks.length > 0) {
        // console.log(blocks.length);
        
        for (let i = 0; i < blocks.length; i++) {
            let distance= dist(leverImg.x, leverImg.y, blocks[i].x, blocks[i].y);
            if(distance<50){
                if(i==0){
                    v1=true;
                    v2=false;
                    v3=false;
                    v4=false;
                    v5=false;
                }
                if(i==1){
                    v1=false;
                    v2=true;
                    v3=false;
                    v4=false;
                    v5=false;
                }
                if(i==2){
                    v1=false;
                    v2=false;
                    v3=true;
                    v4=false;
                    v5=false;
                }
                if(i==3){
                    v1=false;
                    v2=false;
                    v3=false;
                    v4=true;
                    v5=false;

                }
                if(i==4){
                    v1=false;
                    v2=false;
                    v3=false;
                    v4=false;
                    v5=true;

                }
            }
        }
    }
}



function playWhat(){
    if(v1){
        if(!vidIsPlaying){
            video_1.pause()
            // v1= false;
            
        }
        if(vidIsPlaying){
            video_1.play();
            image(video_1, 0, 0, wd , hg );//WD HG  = 0 
        }
        
        
    }else{ 
        video_1.stop();
        
    }
    if(v2){
        if(!vidIsPlaying){
            video_2.pause()
            // v1= false;
            
        }
        if(vidIsPlaying){
            video_2.play();
            image(video_2, 0, 0, wd / 1.001, hg / 1.001);
        }
        
    }else{ 
        video_2.stop();
        
    }
    if(v3){

        if(!vidIsPlaying){
            video_3.pause()
            // v1= false;
            
        }
        if(vidIsPlaying){
            video_3.play();
            image(video_3, 0, 0, wd / 1.001, hg / 1.001);
        }
        
    }else{
        video_3.stop();
    }
    if(v4){
        if(!vidIsPlaying){
            video_4.pause()
            // v1= false;
            
        }
        if(vidIsPlaying){
            video_4.play();
            image(video_4, 0, 0, wd / 1.001, hg / 1.001);
        }
    }else{
        video_4.stop();
    }
    if(v5){
        if(!vidIsPlaying){
            video_5.pause()
            // v1= false;
            
        }
        if(vidIsPlaying){
            video_5.play();
            image(video_5, 0, 0, wd / 1.001, hg / 1.001);
        }
    }else{
        video_5.stop();
    }

}

function draw() {
   
//   image(video_1, 0, 0, wd / 1.001, hg / 1.001);
  playWhat();
  timeLine();
  slider();

  
//   if(your_progress==0){
//     prog_bar = createImg("imagenes/avance_1.png");
//     prog_bar.position(wd/6+10 , hg - 850);

//   }

      
//     if(your_progress==1){
//     prog_bar = createImg("imagenes/avance_2.png");
//     prog_bar.position(wd/6+10 , hg - 850);
//     console.log("Avanceee");
// }
// if(your_progress==2){
// prog_bar = createImg("imagenes/avance_3.png");
// }
// if(your_progress==3){
// prog_bar = createImg("imagenes/avance_4.png");
// }
// if(your_progress==4){
// prog_bar = createImg("imagenes/avance_5.png");
// }
// if(your_progress==5){
// prog_bar = createImg("imagenes/avance_5.png");
// }
  
  
}



function progress(elt){
    your_progress++;
    if(your_progress<6){
        // prog_bar = createImg("imagenes/avance_2.png");
        prog_bar.src="imagenes/avance_"+(your_progress+1)+".png";
        // prog_bar.position(wd/6+10 , hg - 850);
        // prog_bar.resize(wd,hg);
        console.log("Avanceee");
        leverImg.x=leverImg.x + 190;
    }
    
    change_escene();
    // alert('done playing  vid1' + elt.src);
    
    
}





function playVid() { 
    vid.play(); 
  } 


  function pauseVid() { 
      
  } 

  function playPause(){
    console.log("pauseeeee playyy");
    console.log("vidisplayin: "+ vidIsPlaying);
    
    if(vidIsPlaying){
        video_1.pause(); 
        // playButton = createImg("imagenes/play.png"); 
        vidIsPlaying=false;
    }else{
        vidIsPlaying=true;
        video_1.play(); 

    }
    
  }


