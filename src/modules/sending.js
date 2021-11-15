const sending = ({ firstFormId, secondFormId, thiedFormId, someElem = [] }) => {
    const btn = document.querySelectorAll('.form-btn');
    const firstForm = document.getElementById(firstFormId);
    const secondForm = document.getElementById(secondFormId);
    const thirdForm = document.getElementById(thiedFormId);

    const sendData = (data = {}) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        }).then(response => response.json());
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

        sendData(formBody)
            .then(data => console.log(data));

        getData();
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

        sendData(formBody)
            .then(data => console.log(data));

        getData();
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

        sendData(formBody)
            .then(data => console.log(data));

        getData();
    });
};

export default sending;