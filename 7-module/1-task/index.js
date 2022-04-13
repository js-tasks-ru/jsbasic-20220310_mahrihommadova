import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  scrollLeft = 0; 
  scrollRight = 0;
  scrollWidth = 0;
  clientWidth = 0;
  chosenItemId = 0;

  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
    this.menuRgtBtn;
    this.menuLftBtn;
    this.ribbonNav;
  }

  initListener(e) {
    if(e.target.closest('.ribbon__arrow_left')){
      this.left(this.ribbonNav);
    }
    if(e.target.closest('.ribbon__arrow_right')){
      this.right(this.ribbonNav);
    }
    if(e.target.closest('.ribbon__item')){
      e.preventDefault();
      this.chooseItem(e);
    }
  }

  right() {
    this.ribbonNav.scrollBy(350, 0);
    this.turnVisibility();
  }

  left() {
    this.ribbonNav.scrollBy(-350, 0);
    this.turnVisibility();
  }

  turnVisibility() {
    this.scrollWidth = this.ribbonNav.scrollWidth;
    this.clientWidth = this.ribbonNav.clientWidth;
    this.scrollLeft = this.ribbonNav.scrollLeft;
    this.scrollRight = this.scrollWidth - this.scrollLeft - this.clientWidth;

    console.log(this.scrollLeft + '-' + this.scrollRight);
    if(this.scrollLeft != 0) {
      this.menuLftBtn.classList.add('ribbon__arrow_visible');
    } else {
      this.menuLftBtn.classList.remove('ribbon__arrow_visible');
    }

    if(this.scrollRight < 1){
      this.menuRgtBtn.classList.remove('ribbon__arrow_visible');
    } else {
      this.menuRgtBtn.classList.add('ribbon__arrow_visible');
    }
  }

  chooseItem(e) {
    if(document.querySelector('.ribbon__item_active')){
      let activeItem = document.querySelector('.ribbon__item_active');
      activeItem.classList.remove('ribbon__item_active');
      e.target.closest('.ribbon__item').classList.add('ribbon__item_active');
      this.chosenItemId = e.target.closest('.ribbon__item').dataset.id;

      const eventBtn = new CustomEvent('ribbon-select', { 
        detail: this.chosenItemId, 
        bubbles: true 
      });

      e.target.closest('.ribbon__item').dispatchEvent(eventBtn);

    } else {
      this.chosenItemId = e.target.closest('.ribbon__item').dataset.id;

      e.target.closest('.ribbon__item').classList.add('ribbon__item_active');

      const eventBtn = new CustomEvent('ribbon-select', { 
        detail: this.chosenItemId, 
        bubbles: true 
      });

      e.target.closest('.ribbon__item').dispatchEvent(eventBtn);
    }
  }

  render() {
    const ribbonMenu = createElement(`
      <div class="ribbon"></div>
    `);

    this.ribbonNav = createElement(`
      <nav class="ribbon__inner"></nav>
    `);

    const ribbonItems = this.categories.map(item => {
      return `
        <a href="#" class="ribbon__item" data-id=${item.id}>${item.name}</a>
    `});

    this.menuLftBtn = createElement(`
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    this.menuRgtBtn = createElement(`
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    this.ribbonNav.insertAdjacentHTML('beforeend', ribbonItems);
    ribbonMenu.append(this.menuLftBtn);
    ribbonMenu.append(this.ribbonNav);
    ribbonMenu.append(this.menuRgtBtn);

    ribbonMenu.addEventListener('click', (e) => {
      this.initListener(e);
    });

    ribbonMenu.addEventListener('ribbon-select', () => {
      alert(`${this.chosenItemId}`);
    });
    
    return ribbonMenu;
  }
}
