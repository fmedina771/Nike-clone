// ====== JS Sneaker image carousel ======

var myIndex = 0;
carousel();

function carousel() {
    var i;
    // Selecting images
    var x = document.getElementsByClassName("mySlides");
    // Looping through images
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    // Change image every 4 seconds
    setTimeout(carousel, 4000);
}