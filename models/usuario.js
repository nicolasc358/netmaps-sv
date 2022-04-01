const mongoose= require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
    },
    lugar: String
})

module.exports = mongoose.model('Usuario', usuarioSchema)