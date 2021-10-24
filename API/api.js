const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
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
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // The above setting has been applied in app.use(cors) in server.js file
    res.status(200).json(data);
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
    
    User.findOne({username : userData.username}, (error, userReturned)=>{
        if(error)
        console.log(error);
        else if(userReturned){
            // console.log(userReturned);
            res.json({message: "User already exists"});
        }
        else{
            user.save((err, signedupUser)=>{
                if(err){ console.log(`Error : ${err}`)}

                else{
                    let payload = {subject: signedupUser._id};
                    let token = jwt.sign(payload, 'secretkey');
                    res.status(200).json({token});
                }
            });
        }
    });
});
        

router.post('/login', (req, res)=>{
    
    let userData = req.body;
    console.log(userData);
    
    User.findOne({
            username : userData.username}, (error, user)=>{
        if(error)
            // console.log(error);
            res.status(404).send('Error occured')
        else if(!user)
            res.json({message: 'Requested user doesn\'t exist'})
        else if(user.password != userData.password){
            // console.log(user.password);
            // console.log(userData.username);
            // console.log(userData.password);
            res.json({incorrect_password: "Incorrect password"})
        }
        else
        {
            let payload = {subject: user._id};
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).json({token})
        }
    });
});

module.exports = router;