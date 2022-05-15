import express from 'express'

const app = express()
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
next();
});

const PORT = process.env.PORT || 3000


app.post('/api/image', (req, res) => {
    //TODO analyze image

    try {
        const value = Math.floor(Math.random() * (3 - 0)) + 0

        res.status(200).json({ message: value})    
    } catch (error) {
        console.log("Error Rock-Paper-Scissor Service")
        console.log(error)
        res.status(500).json({ message: 'Error Rock-Paper-Scissor Service'})
    }
})

app.get('/api', (req, res) => res.json({ message: 'Rock-Paper-Scissor Service Running.'}))


app.listen(PORT, () => console.log(`Server up on ${PORT}`))