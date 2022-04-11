function initCarousel() {
  let counter = 1; let currentWidth = 0;
  let slideElem = document.querySelector('.carousel__inner');

  const lftBtn = document.querySelector('.carousel__arrow_left');
  lftBtn.style.display = 'none';
  lftBtn.addEventListener('click', () => {
    rgtBtn.style.display = '';
    if(counter > 1) {
      lftBtn.style.display = '';
      currentWidth -= slideElem.offsetWidth;
      slideElem.style.transform = `translateX(-${currentWidth}px)`;  
      counter -= 1;   
      console.log(`counter = ${counter} and width = ${currentWidth} offsetWidth = ${slideElem.offsetWidth}`);
    }
    if(counter == 1) {
      lftBtn.style.display = 'none';
    }
  });

  const rgtBtn = document.querySelector('.carousel__arrow_right');
  rgtBtn.addEventListener('click', () => {
    lftBtn.style.display = '';
    if(counter < 4) {
      rgtBtn.style.display = '';
      currentWidth += slideElem.offsetWidth;
      slideElem.style.transform = `translateX(-${currentWidth}px)`;  
      counter += 1;   
      console.log(`counter = ${counter} and width = ${currentWidth} offsetWidth = ${slideElem.offsetWidth}`);
    }
    if(counter == 4) {
      rgtBtn.style.display = 'none';
    }
  });
}
