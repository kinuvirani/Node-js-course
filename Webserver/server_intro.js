const express=require("express");
const hbs=require('hbs');
const fs=require('fs');
const port=process.env.PORT || 2000;
var app=express();
hbs.registerPartials(__dirname+'/views/partial');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getcurrentyear',()=>
{
    return new Date().getFullYear()
});
hbs.registerHelper('capital',(text)=>
{
    return text.toUpperCase();
});
/*app.get('/',(req,res)=>
{
    res.send("Hello World");
});*/
app.use((req,res,next)=>
{
    var now=new Date().toString();
    var con=`Date= ${now} :${req.method} \ ${req.url}`;
    console.log(con);
    fs.appendFileSync('info.txt',con+"\n");
    next();
});
app.get('/about-json',(req,res)=>
{
    res.send({
        name:"Kiran",
        occupassion:"Student"
    });
});
app.get('/error',(req,res)=>
{
    res.send("<h1>404 : NOT FOUND</h1>");
});
app.get('/about',(req,res)=>
{
    res.render('about.hbs',
    {
      pagetitle:"This is title of the page"
    });
});
app.get('/',(req,res)=>
{
    res.render('home.hbs',{
      msg:"Welcome User...!!!",
      title:"Home Page"
    });
});
app.listen(port,()=>{
  console.log(`Server run successfully and port is ${port}`);
});
