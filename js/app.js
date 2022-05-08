const sliderLine = document.querySelector('.slider-line'),
    prevButton = document.querySelector('.btn-prev'),  
    nextButton = document.querySelector('.btn-next'),
    dots = document.querySelectorAll('.dot');
let position = 0,
    dotIndex = 0;

//function
const nextSlide = () => {
    if (position < (dots.length - 1) * 1279) {
        position += 1279
        dotIndex += 1
    } else {
        position = 0
        dotIndex = 0
        // nextButton.style.display = 'none'
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}
const prevSlide = () => {
    if (position > 0) {
        position -= 1279
        dotIndex -= 1
    } else {
        position = (dots.length - 1) * 1279
        dotIndex = (dots.length - 1)
    }
    sliderLine.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[index].classList.add('active')
} 

//events
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 1279 * index
        sliderLine.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})



//setinterval
setInterval(() => {
    nextSlide()
}, 5000)