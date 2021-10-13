const app = require('express')();

const PORT= 8080;


app.get('/products', (req, res) => {
    res.status(200).send([
        {
            name: 'Apple',
            price: '$1',
            image: 'https://github.com/Harshp20/API-Images/blob/master/apple.jpg?raw=true'
        },
        {
            name: 'Watermelon',
            price: '$5',
            image: 'https://github.com/Harshp20/API-Images/blob/master/watermelon.jpg?raw=true'
        },
        {
            name: 'Cabbage',
            price: '$4',
            image: 'https://github.com/Harshp20/API-Images/blob/master/cabbage.jpg?raw=true'
        },
        {
            name: 'Cauliflower',
            price: '$3.5',
            image: 'https://github.com/Harshp20/API-Images/blob/master/cauliflower.jpg?raw=true'
        },
        {
            name: 'Coriander',
            price: '$0.5',
            image: 'https://github.com/Harshp20/API-Images/blob/master/coriander.jpg?raw=true'
        },
        {
            name: 'Potato',
            price: '$3',
            image: 'https://github.com/Harshp20/API-Images/blob/master/potato.jpg?raw=true'
        },
        {
            name: 'Tomato',
            price: '$2.5',
            image: 'https://github.com/Harshp20/API-Images/blob/master/tomato.jpg?raw=true'
        },
        {
            name: 'Green Apple',
            price: '$3.5',
            image: 'https://github.com/Harshp20/API-Images/blob/master/green-apple.jpg?raw=true'
        },
    
])
});

app.listen(PORT, ()=>{
    console.log(`Live on http://localhost:${PORT}`);
})