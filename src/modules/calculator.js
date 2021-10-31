const calculator = () => {
    let calcInput = document.querySelectorAll('.calc-block > input');

    calcInput.forEach((el) => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/[^\d]/, '');
        });
    });
};

export default calculator;