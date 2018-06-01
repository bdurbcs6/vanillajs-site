class Carousel {
    constructor(element){
        this.element = element;
        this.rightButton = this.element.querySelector('.right-button');
        this.leftButton = this.element.querySelector('.left-button');

        this.rightButton.addEventListener('click', () => { this.clickRight() })
        this.leftButton.addEventListener('click', () => { this.clickLeft() })
        this.images = this.element.querySelectorAll('img');
        this.currentImage = 0;
        this.init()
    }
    init(){
        this.images[this.currentImage].style.display = 'block';
    }

    clickRight(){
        if(this.currentImage === this.images.length - 1) return;
        this.images[this.currentImage].style.display = 'none'
        this.currentImage = this.currentImage + 1;
        this.images[this.currentImage].style.display = 'block'
    }

    clickLeft(){
        if (this.currentImage === 0) return;
        this.images[this.currentImage].style.display = 'none'
        this.currentImage = this.currentImage - 1;
        this.images[this.currentImage].style.display = 'block'
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);