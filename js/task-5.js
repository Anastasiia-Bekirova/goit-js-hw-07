function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const divEl = document.querySelector('.widget');



const onBtnClick = () => {

  divEl.parentNode.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${divEl.parentNode.style.backgroundColor}`;

};



btnEl.addEventListener('click', onBtnClick);