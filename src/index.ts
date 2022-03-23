import express, { Request, Response, NextFunction } from 'express'; 
import path from 'path'
import index from './router/index'
import insert from './router/insert'
const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded( {extended : false } )); 
app.use("/", index);
app.use("/insert", insert);
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))
app.use('/static', express.static(__dirname + '/public'));


app.listen('3000', () => { 
    console.log(` ################################################ 
    🛡️ Server listening on port: 3000🛡️
 ################################################ `); });