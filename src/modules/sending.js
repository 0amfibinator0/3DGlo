const sending = () => {
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json());
    };
    async function getData() {
        const user = await fetch('db.json')
            .then((response) => {
                return response.json();
            });

        sendData(JSON.stringify(user))
        .then(result => console.log(result));
    }
    
    getData();
};

export default sending;