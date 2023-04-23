const express = require('express');

const app = express();

app.use('/product-page',(req,res,next) => {
    console.log('in the Product Page');
    res.send('<h1>in the Product Page </h1>')
});

app.use('/',(req,res,next) => {
    console.log('in the another middleware');
    res.send('<h1>Hello from here </h1>')
})

app.listen(3000);

// const server = http.createServer(app);
// server.listen(3000); 