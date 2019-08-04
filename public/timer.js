
// vision targets th h1 for the count down
let vision = document.getElementById("display")

let countdown;

let decrease = 0;

let canvas = document.getElementById("canvas")

// start gets the numeric input thta the user wanys to start the timer
let start = document.getElementById("begin")

start.addEventListener("click", function(){

  //  the repeated action you want to cancel
  clearInterval(countdown);

  // sets the canvas to be  clickable
  canvas.style.setProperty("pointer-events", "auto")

// count hold the value of the number
  let count = document.getElementById("count").value

  console.log("count: ", count);

  // let params = getURLParams();
  //
  //
  // if(params.minute){
  //   let min = params.minute
  //   count = min * 60
  // }
  // count = params.minute = count

  // console.log("object timer: ", params, params.minute);

  // to get the seconds
  let seconds = count  * 60

//displays the niumber inside of the h1
    vision.innerHTML = convert(seconds)

//for evr sec the timer func is fired
  countdown = setInterval(timer, 1000);


  // count the nume down by one
  function timer(){

    // the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    //  const now = Date.now();
    //
    // const then = now + seconds * 1000;

    // console.log("current date: ", now, "then: ", then);

    decrease ++

    let timeLeft = seconds - decrease

    vision.innerHTML = convert(timeLeft)

      console.log("current timer: ", seconds, decrease);
  //if count = 0 we set the input to the uri of the canvas
      if(timeLeft == 0){

        // sets th canvas to be unclickable
        canvas.style.setProperty("pointer-events", "none")

        // stops the set interval
        clearInterval(countdown);

      }


  }

  // Converts the seconds and minutes form the inputed number
  function convert(s) {

    let minutes = Math.floor(s/60)

    let seconds = s % 60

    // nf stands for number format
    return nf(minutes, 2) + ":" + nf(seconds, 2);
  }

})


  let save = document.getElementById("save")

//save get the id of the button in the from
  save.addEventListener("click", function(){

    let val = document.getElementById("place")

    let uri = canvas.toDataURL()

    val.value = uri

    console.log("uri saved: ", val.value);

      let form = document.getElementById("form")

//this fires the submit method of the from so that the info in inputs is saved to thet data base
      form.submit();

  })
