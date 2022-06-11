const sliderElements = document.querySelectorAll(".item");
var count = 1;
setInterval(() => {
    count++;
    let current = document.querySelector(".default");
    current.classList.remove("default");
    if (count > sliderElements.length) {
        sliderElements[0].classList.add("default");
        count = 1;
    }
    else {
        current.nextElementSibling.classList.add("default")
    }
}, 2000)