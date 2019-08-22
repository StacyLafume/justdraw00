
window.addEventListener('load',() =>{

  const canvas  = document.querySelector("#canvas");
  const context = canvas.getContext("2d");




  let size = document.getElementById('size');

    console.log("i am running!!", size.offsetWidth, size.offsetHeight, "window: ", window.innerWidth);

  canvas.height = size.offsetHeight;
  canvas.width = size.offsetWidth;

  //variables

  let painting = false;
  let x, y = 0;
  const rect = canvas.getBoundingClientRect();

  function startPosting(e){
    painting = true
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }

  function finishedPostion() {
    painting = false;
    x = 0;
    y = 0;
  }

  //EventListeners

  //mouse down makes paining true
  canvas.addEventListener("mousedown", startPosting);
  //mouse up makes painting false
  canvas.addEventListener("mouseup", finishedPostion);

  canvas.addEventListener("mousemove", draw);





  context.lineCap = "round"


  function draw(e) {


    if(!painting) return;

      console.log("x: ", e.clientX, "y: ", e.clientY);



  //context.linewidth = 100;
        //makes line round


      context.beginPath();
      context.moveTo(x, y)
      context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      context.stroke();
      context.closePath();

      x = e.clientX - rect.left;
      y = e.clientY - rect.top;




  }
  canvas.addEventListener("mousemove", draw);


////////////////////////------COURSER SIZE CHANGE------/////////////////////////
    var range = document.getElementById('myRange');

    var myRange = range.value;

  function sizeChange(){
    const context = canvas.getContext("2d");
     myRange = range.value;
     context.lineWidth = myRange;
    console.log("this is the range", myRange );

  }

  range.addEventListener("change", sizeChange)


    ////////////////////////////////////////////////////////////////////////////////

    //////////////////////------COURSER COLOR CHANGE------/////////////////////////
            var color = document.getElementById('color');

            var colorValue = color.value;

            context.strokeStyle = colorValue;

            color.addEventListener("change", colorChange)

                console.log("this is the color", colorValue);

            function colorChange(){
            const context = canvas.getContext("2d");
             colorValue = color.value;
             context.strokeStyle = colorValue;
          }
      ////////////////////////////////////////////////////////////////////////////////
    //
    var eraser  = document.getElementById("eraser");
    var clicks = 0;

    eraser.addEventListener("click", ()=>{

      clicks++

      if (clicks %2 === 0) {

         context.strokeStyle = colorValue;

          console.log("off");

      }else{


        context.strokeStyle = "white";

        console.log("on");
      }

    })

  });
    //

    //
    // eraser.addEventListener("click", eraserClick )

    //   var eraser  = document.getElementById("eraser");
    //
    //   function eraserClick(e) {
    //
    //       context.strokeStyle = "white";
    //   }
    // if (eraser == checked){
    //
    //   eraser.addEventListener("click", eraserClick )
    //
    // }else{
    // console.log(e)
    //   //dont run click event


  //});

  var xIcon = document.getElementById('xIcon')

  xIcon.addEventListener("click",function() {
    console.log("gone");
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  });
