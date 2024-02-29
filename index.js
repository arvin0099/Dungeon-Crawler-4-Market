const exp = require('constants')
const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/home', (req, res) => {
    res.render('index.ejs', {
        
    })
})

app.listen(port, () => {
    console.log('Server Running')
})