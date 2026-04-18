function showMenu() {
  var menu = document.getElementById("top-nav");
  menu.classList.toggle("open");
}


const images = document.querySelectorAll('.expandableImage');

// Loop through the NodeList of images
images.forEach(image => {
  // Add a 'click' event listener to each individual image
  image.addEventListener('click', function () {
    // Toggle the 'expanded' class on the *specific* image that was clicked
    this.classList.toggle('expanded');

  });
});