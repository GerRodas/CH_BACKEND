
const fs = require('fs')

const info = {
"nombre" : "german",
"apellido" : "rodas"
}

const jason = JSON.stringify(info)

fs.promises.writeFile('informacion.json', jason)
    .then (() =>{
        console.log("data guardada");
    })
    .catch (() =>{
        console.log("error. datos no guardados")
    }) 



const archivo = './file.txt'

const prueba1 = async () => {

    await fs.promises.writeFile(archivo, "ahora tu ya no sabras con quien jugar!!!")
    await fs.promises.appendFile(archivo, "\nesto es una cadena, nada más")
    fs.promises.readFile(archivo, 'utf-8')

}


prueba1()