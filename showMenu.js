function showMenu() {
    var menu = document.getElementById("top-nav");
    if (menu.style.display === "none" || menu.style.display === '') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


const images = document.querySelectorAll('.expandableImage');

// Loop through the NodeList of images
images.forEach(image => {
  // Add a 'click' event listener to each individual image
  image.addEventListener('click', function() {
    // Toggle the 'expanded' class on the *specific* image that was clicked
    this.classList.toggle('expanded');
    
  });
});