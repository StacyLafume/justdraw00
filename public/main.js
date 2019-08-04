var trash = document.getElementsByClassName("fa-trash-alt");


// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         //getting data atribute form the html and adding a click event
//         const drawings = element.getAttribute("data-drawings")
//
//           //sending the location for the rout to change true or false in the database
//
//       });
// });

Array.from(trash).forEach(function(element) {

      element.addEventListener('click', function(){
        const png = element.getAttribute("data-drawings")
        console.log(png)
          console.log("png: ", png)
        fetch('drawings', {
          //sending the location for the rout to delete in the collection
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'png': png
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
