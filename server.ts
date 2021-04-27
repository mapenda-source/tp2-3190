var express = require('express');
var app=express();

const path = require('path');
// si ca ne marche pas installez express avec la commade suivante:
// npm install express --save

app.use(express.static(path.join(__dirname , 'dist/tp2')));

app.get('/',function(reg,res){
res.redirect('/fr');
});



var portNumber=3000;// au besoin changez le numero de port
//portNumber=50007
app.listen(portNumber,function(){console.log(' le serveur fonctionne sur le port: '+portNumber)});
console.log('serveur demarré avec success');
//pour executer, tapez la commade suivante:
//node INF2005.js
//Avec un navigateur web, visitez le site http://localhost:3000
//Au besoin remplacez 81 par le numero de port utilisé dans la variable portNumbe
