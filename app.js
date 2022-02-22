const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/home.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/second-page',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/second-page.html'));
});

router.get('/third-page',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/third-page.html'));
});

//add the router
app.use('/', router);
app.use(express.static(__dirname + '/public'));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');