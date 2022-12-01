const fs = require ('fs')

class ProductManager {

    constructor(path) {
        
        this.path = path
    }

    read = () => {
        if (fs.existsSync(this.path)){
            return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        }
        return []
    }
    getNextId = list => {
        const count = list.length
        return (count > 0) ? list[count-1].id +1 : 1
    }

    write = list => {
        return fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    getproducts = async () => {
        const data = await this.read()
        return data
    }

    addProduct = async (obj) => {
        const list = await this.read()
        const nextID = this.getNextId(list)
        obj.id = nextID

        list.push(obj)

        await this.write(list)
    }
    updateProduct = async (id, obj) => {
        obj.id = id
        const list = await this.read()
        for (let i = 0; i < list.length; i++){
            if (list[i].id ==id){
                list [i] = obj 
                break
            }
            
        }
        await this.write(list)
    }
    getProductById = async (id) => {
        const data = await this.read()
        return data[id-1]

        }
        
    
    
    deleteProduct = async (id, obj) => {
        obj.id = id
        const list = await this.read()
        for (let i = 0; i < list.length; i++){
            if (list[i].id ==id){
                list [i] = obj 
                break
            }
            
        }
        await this.write(list)
    }
   
}

const producto = new ProductManager('DataBase.json');

//get data by id?

/*
(async () => {

    await producto.addProduct({
            title: "Teclado",
            description: "PS2",
            price: 300,
            thumbnail: "Imagen 0",
            code: "abc122",
            stock: 25,
        })

        
        console.log(await producto.getproducts());
    })()
*/
(async () =>{

    console.log(await producto.getProductById(2));
    
})()

