const _video_1 = "../videos/agua.mp4";

const _video_2 = "../videos/animales.mp4";

const _video_3 = "../videos/armas.mp4";

const _video_4 = "../videos/droga.mp4";

const _video_5 = "../videos/transporte.mp4";

let img;
let video;
let wd, hg;
let lineWidth = 1000 / 5;
let lineHeigh = 100;
let blocks;
let leverImg;

function preload() {
    video = createVideo(_video_1);
    video.volume(0);
  
    img = loadImage("./descarga.png");
  }

  
  
function setup() {
    background(255, 204, 0);
    // wd= 1920;
    // hg=1080;
  
    wd = displayWidth;
    hg = displayHeight;
    blocks = [
        { x: wd / 6,                 y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(100, 60, 80)", active: false },
        { x: wd / 6 + lineWidth,     y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(130, 130, 90)", active: false },
        { x: wd / 6 + lineWidth * 2, y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(130, 130, 130)", active: false },
        { x: wd / 6 + lineWidth * 3, y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(90, 130, 90)", active: false },
        { x: wd / 6 + lineWidth * 4, y: hg - 300, width: lineWidth, height: lineHeigh, color: "rgb(90, 90, 90)", active: false },
      ];
    leverImg = {x: wd / 6, y: hg - 300, width: lineWidth, height: lineHeigh, active: false}

    createCanvas(wd, hg);
  
    video.hide();
    // Se inicia la reproducción del video
    video.loop();
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
	if (leverImg.active) {
        leverImg.x = mouseX;
    	
			
	}
		
	
  // Prevent default functionality.
  return false;
}

function draw() {
  image(video, 0, 0, wd / 1.001, hg / 1.001);
  
  timeLine();
  slider();
}


