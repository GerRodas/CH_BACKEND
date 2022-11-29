const express = require ('express')

const app = express ()

app.get('/saludo', (request, response)=>{
    response.send("saludos para el tutor copado!")
})

app.listen(8080, () => {
    console.log("servidor arriba y escuchando el puerto 8080")
})