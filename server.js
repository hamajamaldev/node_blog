const express = require('express')
const path = require('path');

const app = express()    
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index', { title: 'Home Page',desc:'hello its description' });
    // return response
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'about page'})
})

app.get('/dist/output.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    // define path
    res.sendFile(path.join(__dirname, 'dist', 'output.css'));
  });
app.listen(3000,()=>{
    console.log('server is listning on port 3000')
})



