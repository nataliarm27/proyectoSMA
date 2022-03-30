var vid = document.getElementById("myVideo"); 
            
function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause(); 
} 

function allowDrop(ev) {
	ev.preventDefault();
  }
  
  function drag(ev) {
	 ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	testing();
  }

  