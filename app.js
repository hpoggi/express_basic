// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en el que vamos a ejecutar el server
const port = 3000

// path inicia, respondera a la url localhost:3000
app.get('/', (req, res) => {
		res.send('Hello World!')
})

// inicializamos la el server
app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
})
