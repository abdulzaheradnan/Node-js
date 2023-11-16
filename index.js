const express=require ("express")


const app=express()


const PORT=3000
app.get("/",(req,res)=>{
    res.send(`<h1>hello bro kya haal hai</h1>`)

})
app.listen(PORT,()=>{
    console.log(`server 3000 is running ${PORT} `)
})
// console.log("hello brother")