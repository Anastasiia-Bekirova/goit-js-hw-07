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

function createBoxes(amount) {
  const size = 30; 
  let htmlString = '';
  for (let i = 0; i <= amount; i++){
   htmlString += `<div style="width: 30px; height: 30px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  } 
   divBoxes.innerHTML = htmlString;
}
const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};
const onBtnClick = () => {
  if (1 < amount <= 100) {
    createBoxes(amount);

  }
};
const onResetBtnClick = () => { 
  destroyBoxes();
}
createBtnEl.addEventListener('click', onBtnClick);
destroyBtnEl.addEventListener('click', onResetBtnClick);