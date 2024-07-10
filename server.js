const expres = require('express')

const app = expres(); 

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
