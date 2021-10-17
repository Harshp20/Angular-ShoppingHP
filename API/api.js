const express = require('express');
const router = express.Router();

const User = require('./models/user.js');
const mongoose = require('mongoose');
const db = "mongodb+srv://Harshp20:nRlWYyEFiritHy7E@cluster0.47dzo.mongodb.net/ShopHPDB?retryWrites=true&w=majority";

mongoose.connect(db, (err)=>{
    if(err){
        console.log(`Unsuccessful Error: ${err}`);
    }
    else
    {
        console.log(`MongoDB Auth Successful`);
    }
})

router.get('/', (req, res)=>{
    res.status(200).send(data);
})

const data= [
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

router.post('/signup', (req, res)=>{   

    let userData = req.body;
    let user = new User(userData);
    
    user.save((err, signedupUser)=>{
        if(err){ console.log(`Error : ${err}`);}

        else{
            res.status(200).send(signedupUser)
        }
    }); 
})

router.post('/login', (req, res)=>{
    
    let userData = req.body;

    User.findOne({username : userData.username}, (error, user)=>{
        if(error)
            console.log(error)
        else if(!user){
            res.status(401).send('Incorrect email')
        }
        else if(user.password != userData.password)
            res.status(401).send("Incorrect password")
        else
            res.status(200).send(user)
    })
})

module.exports = router;