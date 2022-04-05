function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let txt = document.querySelector('#text');
  btn.addEventListener('click', () => {
    if(txt.hidden == false) {
      txt.hidden = true;
    } else if(txt.hidden == true){
      txt.hidden = false;
    } 
  });
}