const express = require('express');
// const cors = require('cors')
const app= express(); 

app.use(express.json());
// app.use(cors);

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