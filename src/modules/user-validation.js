const userValidation = () => {
    let firstTextInput = document.getElementById('form1-name');
    let secondTextInput = document.getElementById('form2-name');
    let thirdTextInput = document.getElementById('form3-name');
    let fourthTextInput = document.getElementById('form2-message');
    let numInput = document.querySelectorAll('.form-phone');
    let emailInput = document.querySelectorAll('.form-email');

    firstTextInput.onblur = () => {
        firstTextInput.value = firstTextInput.value.replace(/-+/g, '-');
        firstTextInput.value = firstTextInput.value.replace(/^\s|\s$/g,"");
        firstTextInput.value = firstTextInput.value.replace(/^-|-$/g,"");
        firstTextInput.value = firstTextInput.value.replace(/\s+/g, ' ');
        firstTextInput.value = firstTextInput.value[0].toUpperCase() + firstTextInput.value.slice(1).toLowerCase();
        if (firstTextInput.value !== /[а-яА-ЯёЁ\-\ ]/g) {
            firstTextInput.value = firstTextInput.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, '');
        }
    };
    secondTextInput.onblur = () => {
        secondTextInput.value = secondTextInput.value.replace(/-+/g, '-');
        secondTextInput.value = secondTextInput.value.replace(/^\s|\s$/g,"");
        secondTextInput.value = secondTextInput.value.replace(/^-|-$/g,"");
        secondTextInput.value = secondTextInput.value.replace(/\s+/g, ' ');
        secondTextInput.value = secondTextInput.value[0].toUpperCase() + secondTextInput.value.slice(1).toLowerCase();
        secondTextInput.value = secondTextInput.value[0].toUpperCase() + secondTextInput.value.slice(1).toLowerCase();
        if (secondTextInput.value !== /[а-яА-ЯёЁ\-\ ]/g) {
            secondTextInput.value = secondTextInput.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, '');
        }
    };
    thirdTextInput.onblur = () => {
        thirdTextInput.value = thirdTextInput.value.replace(/-+/g, '-');
        thirdTextInput.value = thirdTextInput.value.replace(/^\s|\s$/g,"");
        thirdTextInput.value = thirdTextInput.value.replace(/^-|-$/g,"");
        thirdTextInput.value = thirdTextInput.value.replace(/\s+/g, ' ');
        thirdTextInput.value = thirdTextInput.value[0].toUpperCase() + thirdTextInput.value.slice(1).toLowerCase();
        thirdTextInput.value = thirdTextInput.value[0].toUpperCase() + thirdTextInput.value.slice(1).toLowerCase();
        if (thirdTextInput.value !== /[а-яА-ЯёЁ\-\ ]/g) {
            thirdTextInput.value = thirdTextInput.value.replace(/[^а-яА-ЯёЁ\-\ ]/g, '');
        }
    };
    fourthTextInput.onblur = () => {
        fourthTextInput.value = fourthTextInput.value.replace(/-+/g, '-');
        fourthTextInput.value = fourthTextInput.value.replace(/^\s|\s$/g,"");
        fourthTextInput.value = fourthTextInput.value.replace(/^-|-$/g,"");
        fourthTextInput.value = fourthTextInput.value.replace(/\s+/g, ' ');
        fourthTextInput.value = fourthTextInput.value[0].toUpperCase() + fourthTextInput.value.slice(1).toLowerCase();
        fourthTextInput.value = fourthTextInput.value[0].toUpperCase() + fourthTextInput.value.slice(1).toLowerCase();
        if (fourthTextInput.value !== /[.,!?а-яА-ЯёЁ\d\ ]/g) {
            fourthTextInput.value = fourthTextInput.value.replace(/[^.,!?а-яА-ЯёЁ\d\ ]/g, '');
        }
    };
    numInput.forEach((el) => {
        el.onblur = () => {
            el.value = el.value.replace(/-+/g, '-');
            el.value = el.value.replace(/^\s|\s$/g,"");
            el.value = el.value.replace(/^-|-$/g,"");
            el.value = el.value.replace(/\s+/g, ' ');
            if (el.value !== /[\d\-\(\)\+]/g) {
                el.value = el.value.replace(/[^\d\-\(\)\+]/g, '');
            }
        };
    });
    emailInput.forEach((el) => {
        el.onblur = () => {
            el.value = el.value.replace(/-+/g, '-');
            el.value = el.value.replace(/^\s|\s$/g,"");
            el.value = el.value.replace(/^-|-$/g,"");
            el.value = el.value.replace(/\s+/g, ' ');
            if (el.value !== /[A-Za-z\@\-\_\.\!\~\*\']/g) {
                el.value = el.value.replace(/[^A-Za-z\@\-\_\.\!\~\*\']/g, '');
            }
        };
    });
};

export default userValidation;