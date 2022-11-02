
// install rest client extensions to test 

const express = require('express');

const {json} = require('express');      //To allow json to display

const user = require("./router/userRoute");

const app = request();

app.use(json);

app.use('/user', user);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Server is connected");
});

app.listen(PORT, () =>{console.log(`Serving on port ${PORT}`)})

/*
const express = require('express');

const app = express();


app.listen(3000, function(){
    console.log("Server connecting and runing");
});

*/

/*
var http = require('http');

http.createServer(function(req, res){
    console.log("Incoming request received");
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('Hello World');
    //res.end();
    
}).listen(3300);

*/