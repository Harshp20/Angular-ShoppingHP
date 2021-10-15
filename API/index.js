const express = require('express');

const app= express();

app.use(express.json());

const PORT= 8080;

data= [
    {
        id: '1',
        name: 'Apple',
        price: 1,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/apple.jpg?raw=true'
    },
    {
        id:'2',
        name: 'Watermelon',
        quantity: 1,
        price: 5,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/watermelon.jpg?raw=true'
    },
    {
        id:'3',
        name: 'Cabbage',
        price: 4,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/cabbage.jpg?raw=true'
    },
    {
        id: '4',
        name: 'Cauliflower',
        price: 3.5,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/cauliflower.jpg?raw=true'
    },
    {
        id: '5',
        name: 'Coriander',
        price: 0.5,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/coriander.jpg?raw=true    '
    },
    {
        id:'6',
        name: 'Potato',
        price: 3,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/potato.jpg?raw=true'
    },
    {
        
        id: '7',
        name: 'Tomato',
        price: 2.5,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Images/tomato.jpg?raw=true'
    },
    {
        id: '8',
        name: 'Green Apple',
        price: 3.5,
        quantity: 1,
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