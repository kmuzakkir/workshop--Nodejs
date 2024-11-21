const express = require('express'); 
const app = express();              
const port = 8000;                  


app.get('/', (req, res) => {       
    res.sendFile('index.html', {root: __dirname});      
                                                       
});
app.get('/password.html', (req, res) => {       
    res.sendFile('password.html', {root: __dirname});     
                                                       
});
app.get('/signup.html', (req, res) => {        
    res.sendFile('signup.html', {root: __dirname});      
                                                       
});
app.get('/index.html', (req, res) => {      
    res.sendFile('index.html', {root: __dirname});      
                                                       
});



app.listen(port, () => {          
    console.log(Now listening on port ${port}); 
});
