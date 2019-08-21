

var trash = document.getElementsByClassName("fa-trash-alt");


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
/////////////sending info to the next page for the fetch//////////////////////
var edit = document.getElementsByClassName("fa-edit");

Array.from(edit).forEach(function(element) {

  element.addEventListener('click', function(){

    //png
    const editImg = element.getAttribute("data-drawings");

    //id
    const id = element.getAttribute("data-id");

    //tile
    const title = element.getAttribute("data-title");

    console.log("Url: ", editImg, "id: ", id, "title: ", title);

    //saving to the local stroage
    localStorage.setItem('url', editImg);

    localStorage.setItem('drawId', id);

    localStorage.setItem('title', title);

    // this goes to the edit draw page therough href
    window.location.href = `/editdraw?pic_id=${id}`

  })
})
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

var backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function(){
 console.log("im working: ", backToTop);

 window.scrollTo(0,0);


});

var xIcon = document.getElementById('xIcon')

xIcon.onclick = function(event) {
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
}
