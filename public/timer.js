
// vision targets th h1 for the count down
let vision = document.getElementById("display")

let countdown;

let decrease = 0;

let canvas = document.getElementById("canvas")

// start gets the numeric input that the user wants to start the timer
let start = document.getElementById("begin")

start.addEventListener("click", function(){

  //  the repeated action you want to cancel
  //stops timer
  clearInterval(countdown);

  // sets the canvas to be  clickable
  canvas.style.setProperty("pointer-events", "auto")

// count holds the value of the number
  let count = document.getElementById("count").value

  // default timer if user does not input any value to start the timer.
    if(count <= 0){
      count = 3
    }

  console.log("time: ", count);

  // to get the seconds
  let seconds = count  * 60

//displays the niumber inside of the h1
    vision.innerHTML = convert(seconds)

//for every sec the timer func is fired
  countdown = setInterval(timer, 1000);


  // count the nume down by one
  function timer(){

    decrease ++

    let timeLeft = seconds - decrease

    vision.innerHTML = convert(timeLeft)

      // console.log("current timer: ", seconds, decrease);
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

/////////////THIS IS THE POST///////////////////////
  let save = document.getElementById("save")

//save get the id of the button in the from
  save.addEventListener("click", function(){

      //Place is the input
    let val = document.getElementById("place")

      // this th title that the user inputs
    let title = document.getElementById("title").value

      // this is the form used to ssend info to database
    let settingTitle = document.getElementById("setTitle")

    //gets pic url from canavas
    let uri = canvas.toDataURL()

    //make sure it has the url
    val.value = uri

    //make the input in the form = the title that the users
    settingTitle.value = title

    console.log("uri saved: ", val.value);

      let form = document.getElementById("form")

//this fires the submit method of the from so that the info in inputs is saved to thet data base
      form.submit();

  })
