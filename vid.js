// Get the modal
var videoPopup = document.getElementById('videoPopup');

// Get the button that opens the modal
var openBtn = document.getElementById("openBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, open the modal
openBtn.onclick = function() {
    videoPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    videoPopup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == videoPopup) {
        videoPopup.style.display = "none";
    }
}
