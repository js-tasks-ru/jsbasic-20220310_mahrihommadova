import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  currentSlide = 0;

  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  initCarousel(e, parentDiv){    
    if(e.target.closest('.carousel__arrow_right')){
      this.next();
    }
    if(e.target.closest('.carousel__arrow_left')){
      this.prev();
    }
    if(e.target.closest('.carousel__button')){
        const eventBtn = new CustomEvent("product-add", { 
          detail: this.slides[this.currentSlide].id, 
          bubbles: true 
        });

        e.target.closest('.carousel__button').dispatchEvent(eventBtn);
    }
  }

  prev(){
    this.currentSlide--;
    this.turnSlide(this.elem);
  }

  next(){
    this.currentSlide++;
    this.turnSlide(this.elem);
  }

  turnSlide(parentDiv){
    const leftBtn = parentDiv.querySelector('.carousel__arrow_left');
    const rightBtn = parentDiv.querySelector('.carousel__arrow_right');
    const carouselInner = parentDiv.querySelector('.carousel__inner');
    let currentWidth = -carouselInner.offsetWidth * this.currentSlide;
    carouselInner.style.transform = `translateX(${currentWidth}px)`;

    if(this.currentSlide == 0){
      leftBtn.style.display = 'none'
    } else {
      leftBtn.style.display = ''
    }

    if(this.currentSlide == this.slides.length - 1) {
      rightBtn.style.display = 'none'
    } else {
      rightBtn.style.display = ''
    }
  }

  render(){
    const parentDiv = createElement(`
      <div class='carousel'></div>
    `);

    const slidesRgtBtn = createElement(`
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
    `);

    const slidesLftBtn = createElement(`
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `);
    
    const innerDiv = createElement(`
      <div class='carousel__inner'></div>
    `);

    const slidesDraw = this.slides.map(item => {
      return `
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `});

    innerDiv.insertAdjacentHTML('beforeend', slidesDraw);
    parentDiv.append(slidesRgtBtn);
    parentDiv.append(slidesLftBtn);
    parentDiv.append(innerDiv);

    parentDiv.addEventListener("click", (e) => {
      this.initCarousel(e, parentDiv);
    });

    parentDiv.addEventListener('product-add', () => {
      alert(`${this.slides[this.currentSlide].id}`);
    });

    this.turnSlide(parentDiv);

    return parentDiv;
  }
}
