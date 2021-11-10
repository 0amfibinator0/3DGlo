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
    const getData = () => {
        const user = fetch('db.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                return data;
            });
        
            console.log(user);

        sendData(JSON.stringify(user))
        .then(result => console.log(result));
    };
    
    getData();
};

export default sending;