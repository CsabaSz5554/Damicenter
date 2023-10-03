 // JavaScript to make the header sticky when scrolling
 window.addEventListener("scroll", function() {
    var header = document.getElementById("stickyHeader");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


