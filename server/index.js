const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const dotenv = require('dotenv');
const controller = require("./controller");

dotenv.config()

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(database=>{
    app.set("db", database)
}).catch(database=>{
    console.log('Error in Massive')
})

app.get("/api/shoes", controller.getAllShoes)

app.post("/api/shoes", controller.postAlloftheShoes)

app.delete("/api/shoes/:id", controller.deletetheShoe)



const PORT = 4725;
app.listen(PORT, ()=>{console.log(`Server is listening ${PORT}`)})