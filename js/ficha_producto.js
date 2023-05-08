var currentImage = 1;
var totalImages = 3;

function showImage(n) {
    var images = document.querySelectorAll('.carousel img');
    var buttons = document.querySelectorAll('.carousel-buttons button');

    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
        buttons[i + 2].classList.remove('active');
    }

    images[n - 1].classList.add('active');
    buttons[n + 1].classList.add('active');

    currentImage = n;
}

function prevImage() {
    if (currentImage == 1) {
        showImage(totalImages);
    } else {
        showImage(currentImage - 1);
    }
}

function nextImage() {
    if (currentImage == totalImages) {
        showImage(1);
    } else {
        showImage(currentImage + 1);
    }
}

function jumpToImage(n) {
    showImage(n);
}