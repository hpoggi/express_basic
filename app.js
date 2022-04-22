// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// Puerto en el que vamos a ejecutar el server
const port = 3000

// path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
		res.send('Hello World!')
})

// path localhost:3000/launchx
app.get('/launchx', (req, res) => {
		res.send('Bienvenidos a launchx')
})


// returning an object
// path localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
		const explorer = {name: "Explorer", msg: "Hello"}
		res.send(explorer)
})

// inicializamos la el server
app.listen(port, () => {
		console.log(`Example app listening on port ${port}`)
})
