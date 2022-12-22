const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// with out require('body-parser')
// app.use((req, res, next)=>{
//     // console.log('MIDDLEWARE')
//     // MiddleWare
    
//         let body = '';
//         req.on('end',()=>{
//             const userName = body.split('=')[1];
//             if(userName){
//                 req.body = {name: userName}
//             }
//             next()
//         })
//         req.on('data',(chunk)=>{
//             body+=chunk;
//         })
// })

// app.use((req, res, next)=>{
//     if(req.body){
//         return res.send('<h1>' + req.body.name + '</h1>');
//     }
//     res.send('<form method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>')
// })

app.use(bodyParser.urlencoded({extended: false}));

app.post('/user',(req,res, next)=>{
    return res.send('<h1>' + req.body.username + '</h1>');
})

app.get('/',(req, res, next)=>{
    res.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>')
})

app.listen(5000);