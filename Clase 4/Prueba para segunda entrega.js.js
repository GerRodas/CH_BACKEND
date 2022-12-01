
const fs = require('fs')

class ProductManager {

    constructor() {
        this.products = []
        this.path = 'DataBase.json'
    };

    getProducts = async () =>({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    });
};

const info = {
    title: "producto prueba",
	description: "Este es un producto prueba",
	price: 200,
	thumbnail: "Sin imagen",
	code: "abc123",
	stock: 25,

    }

const jason = JSON.stringify(info)

fs.promises.writeFile(this.path, jason)
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