const express =require("express")

const app= express()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


//res method of server

//1. res.send() => to send simple text,html,aray obj

app.get("/",(req,res)=>{
    res.send("this is home page");
})

app.get("/html",(req,res)=>{
    res.send(`<h1>this isheading 1</h1>
       <p>this is paragraph</p> `);
})

app.get("/array",(req,res)=>{
      res.send(["a","b","c","d"])
})

app.get("/obj",(req,res)=>{
    res.send({name: "ali", age: 25})
})
//2. res.json => to send json data
app.get("/json",(req,res)=>{
    res.send({name: "ali", age: 25})
})
//3. res.redirect => to redirect to another route or URL
app.get("/redirect",(req,res)=>{
    res.redirect("https://www.google.com/")
})
//4. ejs => ebbided js => to render html pages with dynamic data 
// what is ejs=> ejs ia a template engine for node.js and express.js

//install the ejs =>npm i ejs
//api set
//render res method
//view a folder bana k andr file bnao
//

app.get("/ejs",(req,res)=>{
    res.render("about")
})

//5. download

app.get("/download",(req,res)=>{
    res.download("lec-3-methods/file/React Props.docx")  //2 parameter
})

//1p- => folder and file name
//2p- /=> document ki type 