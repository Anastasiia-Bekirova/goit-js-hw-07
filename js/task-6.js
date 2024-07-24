function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const divControls = document.querySelector('#controls');


const amount = divControls.childNodes[0].value;
let htmlString = '';
function createBoxes(amount) {
  const size = 30; 
  for (let i = 0; i <= amount; i++){
   `<div style = width:${size}px, height:${size}px, background-color:${getRandomHexColor}()></div>`;
    size += 10;
  } 
   divBoxes.innerHTML += htmlString ;
}
const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};
const onBtnClick = () => {
  if (amount <= 100) {
    createBoxes(amount);

  }

  if (amount > 100) {
    createBtnEl.removeEventListener('click', onBtnClick);
  }
};
const onResetBtnClick = () => { 
  destroyBoxes();
}
createBtnEl.addEventListener('click', onBtnClick);
destroyBtnEl.addEventListener('click', onResetBtnClick);