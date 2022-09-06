require('dotenv').config()
const express =require('express');
const { default: mongoose } = require('mongoose');
const moongoose = require('./routes/contacts')
const contactsRoutes = require('./routes/contacts')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
}))
app.use((req,res,next)=>{
    console.log(req.path)
    next()
})

//Routes
app.use('/api/contacts',contactsRoutes)


mongoose.connect(process.env.MONGO_URl)
.then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log("test")
        })
})
.catch((error)=>{

})


