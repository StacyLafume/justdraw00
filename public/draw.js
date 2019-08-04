window.addEventListener('load',() =>{

  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d")



  //resizing

  let size = document.getElementById('size');

    console.log("i am running!!", size.offsetWidth, size.offsetHeight, "window: ", window.innerWidth);
  //
  canvas.height = size.offsetHeight;
  canvas.width = size.offsetWidth;

  //variables

  let painting = false;

  function startPosting(e){
    painting = true
    draw(e.target);
  }

  function finishedPostion() {
    painting = false;
    context.beginPath();
  }

  //EventListeners

  //mouse down makes paining true
  canvas.addEventListener("mousedown", startPosting);
  //mouse up makes painting false
  canvas.addEventListener("mouseup", finishedPostion);

  function draw(e){

    if(!painting) return;

      console.log("x: ", e.clientX, "y: ", e.clientY);

      context.linewidth = 10;
        //makes line round
      context.lineCap = "round"

      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX-438-330, e.clientY-438-330)
  }
  canvas.addEventListener("mousemove", draw);

});
