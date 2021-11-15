const userValidation = () => {
    let firstTextInput = document.getElementById('form1-name');
    let secondTextInput = document.getElementById('form2-name');
    let thirdTextInput = document.getElementById('form3-name');
    let fourthTextInput = document.getElementById('form2-message');
    let numInput = document.querySelectorAll('.form-phone');

    firstTextInput.addEventListener('input', () => {
        firstTextInput.value = firstTextInput.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
    });
    secondTextInput.addEventListener('input', () => {
        secondTextInput.value = secondTextInput.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
    });
    thirdTextInput.addEventListener('input', () => {
        thirdTextInput.value = thirdTextInput.value.replace(/[^а-яА-ЯёЁ\ ]/g, '');
    });
    fourthTextInput.addEventListener('input', () => {
        fourthTextInput.value = fourthTextInput.value.replace(/[^.,!?а-яА-ЯёЁ\d\ ]/g , '');
    });

    numInput.forEach((el) => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/[^\d\-\(\)\+]/, '');
        });
    });
};

export default userValidation;