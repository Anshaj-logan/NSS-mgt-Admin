const express = require('express')
const studentsRouter = require('./src/routes/studentsRouter')
const profileRouter = require('./src/routes/profileRouter')
const notificationRouter = require('./src/routes/notificationRouter')
const volunteersRouter = require('./src/routes/volunteersRouter')
const campRouter = require('./src/routes/campRouter')
const postRouter = require('./src/routes/postRouter')
const reportRouter = require('./src/routes/reportRouter')
const suggestionRouter = require('./src/routes/suggestionRouter')
const app = express()

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

  
  


app.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
}
)