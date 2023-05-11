const express = require('express')
const mongoose = require('mongoose')
const studentsRouter = require('./src/routes/studentsRouter')
const profileRouter = require('./src/routes/profileRouter')
const notificationRouter = require('./src/routes/notificationRouter')
const volunteersRouter = require('./src/routes/volunteersRouter')
const campRouter = require('./src/routes/campRouter')
const postRouter = require('./src/routes/postRouter')
const reportRouter = require('./src/routes/reportRouter')
const suggestionRouter = require('./src/routes/suggestionRouter')
const app = express()
var bodyParser = require('body-parser')
const RegisterRouter = require('./src/routes/api/RegisterRouter')
const signinRouter = require('./src/routes/api/signinRouter')

app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./src/views')

app.get('/dashboard', function (req, res) {
  res.render('dashboard')
})
app.get('/', (req, res)=> {
    res.render('dashboard')
  })
  
 
   app.use('/profileRouter',profileRouter)
  
   app.use('/notificationRouter',notificationRouter)

   app.use('/studentsRouter',studentsRouter)

   app.use('/volunteersRouter',volunteersRouter)

   app.use('/campRouter',campRouter)

   app.use('/postRouter',postRouter)

   app.use('/reportRouter' ,reportRouter)

   app.use('/suggestionRouter',suggestionRouter)

  


   app.use(express.static('./public'))
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });



  app.use('/api/register/',RegisterRouter)
  app.use('/api/login/',signinRouter)
  


   const MONGODB_URL=
   "mongodb+srv://anshajmaitexa:1234@cluster0.kn4gexk.mongodb.net/NSS_db?retryWrites=true&w=majority"
   
   
   const port=2000;
   
   mongoose.connect(MONGODB_URL).then(()=>{
       app.listen(port,()=>{
           console.log(`server running on port http://localhost:2000/admin`);
       })
   }).catch((error)=>{
       console.log(` ${error} did not connect`); 
   })