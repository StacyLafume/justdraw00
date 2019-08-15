

  const space  = document.querySelector("#canvas");

  const context = space.getContext("2d");

  window.onload = function() {

    //grabbing the saved url from local storage
    let editImg = localStorage.getItem('url');

    //grabbing the saved id from local storage
    let id = localStorage.getItem('drawId');

      //grabbing the title
    let title = localStorage.getItem('title');// note this is

    console.log("got the id: ", id);

    console.log("Got it: ", editImg);

      //processing the info that we grabbed
    drawImageFromWebUrl(editImg);

    settingTile(title)

  };

  let reset = document.getElementById("reset")

  reset.addEventListener("click", function() {

      let id = localStorage.getItem('drawId');

    window.location.href = `/editdraw?pic_id=${id}`
  })

  function settingTile(title){

      //this functions is putting the title in the input
    let input = document.getElementById("editTitle")

    input.value = title

  }


////////////REDRAWS OLD IMG INTO THE CANVAS///////////////
  function drawImageFromWebUrl(sourceurl){

      console.log("url: ", sourceurl);

        var img = new Image();
        img.crossOrigin = "Anonymous";

        img.addEventListener("load", function () {
          
            // The image can be drawn from any source
            context.drawImage(img, 0, 0, img.width, img.height, 0, 0, space.width, space.height);
        });
        img.setAttribute("src", sourceurl);
  }

  var update = document.getElementById("update");


  update.addEventListener('click', function(){

    let id = localStorage.getItem('drawId');

     let uri = canvas.toDataURL()

//grabbng the value of the input
     let input = document.getElementById("editTitle").value

    console.log("got the id: ", id, "your gonna be edited: ", uri, "got changed title: ", input);

        fetch('editdraw', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({

            // sending it to the root for the update
            "id": id,
            "url": uri,
            "title": input
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          // window.location.reload(true)
          window.location.href = `/profile`
        })
      });
