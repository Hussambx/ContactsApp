const mongoose =require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:true
},
phonenumber:{
    type:Number,
    requried:true
}
},
{timestamps:true}
)

module.exports = mongoose.model('Contact',contactSchema)

