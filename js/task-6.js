function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const divControls = document.querySelector('#controls');
const inputEl = document.querySelector('[type="number"]');


function createBoxes(amount) {
  let size = 30; 
  let htmlString = '';
  for (let i = 0; i <= amount; i++){
   htmlString += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
  } 
   divBoxes.innerHTML = htmlString;
}
const destroyBoxes = () => {
  divBoxes.innerHTML = '';
};
const onBtnClick = () => {
  const amount = Number(inputEl.value);

  if (amount < 1 || amount > 100) {
     inputEl.value = '';
  } else {
    createBoxes(amount);
     inputEl.value = '';
  } 
 
};
const onResetBtnClick = () => { 
  destroyBoxes();
}
createBtnEl.addEventListener('click', onBtnClick);
destroyBtnEl.addEventListener('click', onResetBtnClick);

destroyBtnEl.classList.add("destroy");
inputEl.classList.add("inputStyles");