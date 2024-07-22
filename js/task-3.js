const fieldEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const onFieldInput = () => {
    if (fieldEl.value === '') {
        spanEl.textContent = 'Anonymous'; 
    } else if (fieldEl.value.trim() != '') {
        spanEl.textContent = fieldEl.value.trim();
    }
};
fieldEl.addEventListener('input', onFieldInput);