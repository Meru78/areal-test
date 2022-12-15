const express = require("express")
var bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const {Base64} = require('js-base64');

require('dotenv').config()

const {connect, Words}= require("../dbManager/dbManager")

var app = express();
app.use(bodyParser.json())

connect();

app.get('/:id', async (req, res) => {
    let word = await Words.findOne({where:{uuid: req.params.id}})
    if(word){
        await word.destroy()
        res.status(200).json(Base64.atob(word.text))
    }
    else{
        res.status(200).json("Сообщение удалено")
    }
})

app.post('/generate_url', async (req, res) => {
    try{
        let uuid = uuidv4();
        await Words.create(
            {
                uuid: uuid,
                text: Base64.btoa(req.body.text),
            }
        )


        res.status(200).json(`http://localhost:3000/${uuid}`)
    } catch(err){
        console.log(`Офыбка: ${err}`)
        res.status(500)
    }
})

module.exports = app
