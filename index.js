const express=require ("express")
const cors=require("cors")

const app=express()
app.use(cors())

const PORT=3000
app.get("/",(req,res)=>{
    res.send(`<h1>bro what are you doing</h1>`)

})
const Employes=[
    {
        name:"zaher",
        age:25,
        number:9391507371

    },
    {
        name:"faraz",
        age:26,
        number:34586455
    },
    {
        name:"asim",
        age:45,
        number:454578454
    },
    {
        name:"imran",
        age:27,
        number:4578716989

    },
    {
        name:"maaz",
        age:25,
        number:458594545
    },
    {
        name:"sohel",
        age:29,
        number:45646485
    }
]
app.get("/users",(req,res)=>{
    console.log(req)

    res.send({
        data:Employes,
        massage:"success"
    })

})
app.listen(PORT,()=>{
    console.log(`server 3000 is running ${PORT} `)
})
// hum bhi hai yaro