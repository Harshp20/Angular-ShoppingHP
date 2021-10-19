const express = require('express');
const app= express(); 

const cors = require('cors')
// app.use(cors); WRONG
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());


const PORT= 8080;

const api = require('./api');
app.use('/products', api);

app.listen(PORT, ()=>{
    console.log(`Live on http://localhost:${PORT}`);
})

// app.get('/', (req, res) => {
//     // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//         res.status(200)
// });