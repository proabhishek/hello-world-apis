const express =  require("express")
const app = express()
const port = 5000


// convert json on javascript object 
app.use(express.json())

app.get("/sum", (req, res)=>{
    let a = 10
    let b = 20
    let sum = a+b
    res.send("Sum is: "+sum)
})

app.post("/mul", (req, res)=>{

    // let n1 = req.query.n1 
    // let n2 = req.query.n2
    let {n1,n2} = req.query
    let mul = n1*n2
    console.log(mul)
    res.send("Mul is:"+mul)
})

app.post("/div", (req, res)=>{
   console.log(req.body.name)
   let {name,n1,n2} = req.body
    let div = n1/n2
    res.send("Division "+div)
})

app.listen(port, ()=>{console.log("Server started....")})


