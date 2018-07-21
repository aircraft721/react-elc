const express = require('express');

//We write all our functions withing this block of code
exports = module.exports = (handler, settings) => { //  <== 1. Here we inject them as shown with 'settings'.
    let app = express(),
        PORT = settings.http.port,
        HOST = settings.http.host;

    //This is used if we get json objects through http
    app.use(express.json());
    //Decoding URL
    app.use(express.urlencoded({ extended: true }));

    //we call the GET methond from express that requires an endpont and
    // a callback but we can also implement a middleware between.
    app.get('/',(req,res)=>{
        res.send('OK')
    })
    app.post('/post', handler.postItem);
    app.get('/get', handler.getAll);
    app.delete('/delete/:id', handler.removeOne);
    app.put('/update/:id', handler.updateOne);


    //Here we return a function that starts to listen on port 3000 atm.
    return {
        start: () => {
            app.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
        }
    }
}

//we export it as a singleton
exports['@singleton'] = true;
//here we make out requers and and we injected in (1)
exports['@require'] = ['handlers/handler', 'lib/settings']