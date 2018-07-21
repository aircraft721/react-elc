// This is the entry point
const IoC = require('electrolyte');

//Define root
IoC.use(IoC.dir('./'));

//create container
let http = IoC.create('server/http');

//initializa http
http.start();