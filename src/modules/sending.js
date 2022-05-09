const sending = ({ firstFormId, secondFormId, thiedFormId, someElem = [] }) => {
    const btn = document.querySelectorAll('.form-btn');
    const firstForm = document.getElementById(firstFormId);
    const secondForm = document.getElementById(secondFormId);
    const thirdForm = document.getElementById(thiedFormId);

    let firstTextInput = document.getElementById('form1-name');
    let secondTextInput = document.getElementById('form2-name');
    let thirdTextInput = document.getElementById('form3-name');
    let fourthTextInput = document.getElementById('form2-message');
    let numInput = document.querySelectorAll('.form-phone');
    let emailInput = document.querySelectorAll('.form-email');
    let firstEmail = document.querySelector('#form1-email');
    let secondEmail = document.querySelector('#form2-email');
    let thirdEmail = document.querySelector('#form3-email');
    let xhr = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/posts";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = 'json';

    const clean = () => {
        setTimeout(() => {
            firstTextInput.value = '';
            secondTextInput.value = '';
            thirdTextInput.value = '';
            fourthTextInput.value = '';
        
            numInput.forEach((el) => {
                el.value = '';
            });
            emailInput.forEach((el) => {
                el.value = '';
            });
        }, 200);
    };
    
    const sendData = (data = {}) => {
        data = JSON.stringify(data);
        xhr.send(data);
    };
    async function getData(e) {
        const user = await fetch('db.json')
            .then((response) => {
                return response.json();
            });

        sendData(user)
        .then(result => console.log(result));
    }

    firstForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(firstForm);
        const formBody = {} ;

        formData.forEach((val, key)  => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else {
                formBody[elem.id] = element.value;
            }
        });

        if (firstEmail.value === '') {
            alert ('введите почту');
        } else {
            sendData(formBody)
                .then(data => console.log(data));

            clean();
        }
    });
    secondForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(secondForm);
        const formBody = {} ;

        formData.forEach((val, key)  => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else {
                formBody[elem.id] = element.value;
            }
        });

        if (secondEmail.value === '') {
            alert ('введите почту');
        } else {
            sendData(formBody)
                .then(data => console.log(data));

            clean();
        }
    });
    thirdForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(thirdForm);
        const formBody = {} ;

        formData.forEach((val, key)  => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else {
                formBody[elem.id] = element.value;
            }
        });

        if (thirdEmail.value === '') {
            alert ('введите почту');
        } else {
            sendData(formBody)
                .then(data => console.log(data));

            clean();
        }
    });
};

export default sending;