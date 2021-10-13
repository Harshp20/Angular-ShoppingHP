const express = require('express');

const app= express();

app.use(express.json());

const PORT= 8080;

data= [
    {
        name: 'Apple',
        price: '$1',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/apple.jpg?raw=true'
    },
    {
        name: 'Watermelon',
        price: '$5',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/watermelon.jpg?raw=true'
    },
    {
        name: 'Cabbage',
        price: '$4',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/cabbage.jpg?raw=true'
    },
    {
        name: 'Cauliflower',
        price: '$3.5',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/cauliflower.jpg?raw=true'
    },
    {
        name: 'Coriander',
        price: '$0.5',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/coriander.jpg?raw=true    '
    },
    {
        name: 'Potato',
        price: '$3',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/potato.jpg?raw=true'
    },
    {
        name: 'Tomato',
        price: '$2.5',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/tomato.jpg?raw=true'
    },
    {
        name: 'Green Apple',
        price: '$3.5',
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/green-apple.jpg?raw=true'
    },
]


app.listen(PORT, ()=>{
    console.log(`Live on http://localhost:${PORT}`);
})

app.get('/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.status(200).send(data)
});

/*app.post('/products/:id', (req, res)=>{

    res.status(200).send(
        {
            name: 'Green Apple',
            price: '$3.5',
        }
    );
})*/