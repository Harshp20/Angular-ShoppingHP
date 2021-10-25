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

const data= [
    {
        name: 'Apple AirPods 2nd Generation',
        price: 179,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/airpods2.JPG?raw=true'
    },
    {
        name: 'Apple Airpods Max',
        price: 679,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/airpodsmax.JPG?raw=true'
    },
    {
        name: 'Acer Predator Helios 300',
        price: 1400,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/helios300.JPG?raw=true'
    },
    {
        name: 'Apple iPhone 12 256GB',
        price: 1300,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/iphone12.JPG?raw=true'
    },
    {
        name: 'Apple Airpods Pro',
        price: 280,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/airpodspro.JPG?raw=true'
    },
    {
        
        name: 'Apple Homepod',
        price: 500,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/homepod.JPG?raw=true'
    },
    {
        name: 'RGB Gaming Keyboard',
        price: 700,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/rgbkeyboard.JPG?raw=true'
    },
    {
        name: 'Samsung S21 Ultra 256GB',
        price: 1000,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/samsungs21ultra.JPG?raw=true'
    },
    {
        name: 'Samsung 55inch 4K UHD TV',
        price: 650,
        quantity: 1,
        image: 'https://github.com/Harshp20/ShoppingHP/blob/wizard/API/Products%20Pictures/samsung4kuhdtv.JPG?raw=true'
    }
]

router.get('/', (req, res)=>{
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // The above setting has been applied in app.use(cors) in server.js file
    res.status(200).json(data);
})

// function verifyToken(req, res, next){
//     if(!req.headers.authorization){
//         return res.status(401).send('unauth Request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null'){
//         return res.status(401).send('unauth Request')
//     }
//     let payload = jwt.verify(token, 'secreKey')
//     if(!payload){
//         return res.status(401).send('unauth Request')
//     }
//     req.userId = payload.subject
//     next()
// }

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
    // console.log(userData);
    
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