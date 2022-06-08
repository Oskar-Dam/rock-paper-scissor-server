import express from 'express'

const app = express()
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
next();
});

const PORT = process.env.PORT || 3000
const elements = ["HARRI", "PAPER", "GURAIZE"]

app.post('/api/image', (req, res) => {
    //TODO analyze image
    // IZASKUN CODE


    let gameResult;
    try {
        const value = Math.floor(Math.random() * (3 - 0)) + 0

        if (value === 0) {
            gameResult = "ORDENADOR GANA. LA PIEDRA GANA A LAS TIJERAS"
          } else if (value == 2) {
            gameResult = "EMPATE"
          } else {
            gameResult = "JUGADOR GANA. LAS TIJERAS CORTAN EL PAPEL"
          }

        res.status(200).json({ index: value, message: gameResult, element: elements[value]})    
    } catch (error) {
        console.log("Error Rock-Paper-Scissor Service")
        console.log(error)
        res.status(500).json({ message: 'Error Rock-Paper-Scissor Service'})
    }
})

app.get('/api', (req, res) => res.json({ message: 'Rock-Paper-Scissor Service Running.'}))


app.listen(PORT, () => console.log(`Server up on ${PORT}`))