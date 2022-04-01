const express=require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario.js');

const app=express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//var publicPath = path.resolve(__dirname, 'public');

app.get('/',(req, res)=>{
 res.send("sv")
})
app.post('/',(req,res)=>{//id2: 41938 id3: 4168'19
    console.log(req.body)//id2: 55885 id3: 64404 21
    if (req.body[0]!=null){
        let body=req.body[0];
        let nombre=body.nombre;
        let beacon=body.beacon;
        let lugar;
        switch (beacon){
            case "23832"://  a52
                lugar="a52"
                break;
            case "55885"://pool
                lugar="pool"
                break;
            case "41938"://comedor
                lugar="comedor"
                break;
        }
        Usuario.findOne({nombre:nombre},(error,user)=>{
            if (error) {
                return res.status(500).json({
                ok: false,
                err: error
                })
            }
            if(!user){
                if (nombre!=null){
                    let usuario = new Usuario({
                        nombre,
                        lugar,
                    });
                    usuario.save()
                }
                
            }else{
                user.lugar=lugar;
                user.save();
            }
        })}
    Usuario.find({},(error,u)=>{
        res.json(u);
    }) 
})

mongoose.connect("mongodb://mongo:27017/custom")
// mongoose.connect("mongodb://127.0.0.1:27017/custom")
app.listen(3000,()=>{
    console.log('sv on');
})
