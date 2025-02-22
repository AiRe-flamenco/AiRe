// script.js
window.addEventListener('scroll', function() {
    var image = document.getElementById('scrollImage');
    var scrollPosition = window.scrollY + window.innerHeight;
    var imagePosition = image.offsetTop;

    if (scrollPosition >= imagePosition) {
        image.classList.remove('hidden');
    }
});
