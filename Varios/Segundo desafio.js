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

    addProduct = async (object) => {
        const list = await this.read()
        const nextID = this.getNextId(list)
        object.id = nextID

        list.push(object)

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
        const object = data.find(i =>i.id === id);
        if (object){
            return object
        } else {
            return "Id no encontrado"
        }
    }
     
    deleteProduct = async (id) => {
        
        const data = await this.read()
        try {
            const object = data.filter(i =>i.id !== id);
            await this.write(object)
            return "Objeto eliminado"
        } catch (error) {
            return "Objeto no encontrado"
           
        }
        
    }
 
    
}

const producto = new ProductManager('DataBase.json');

//get data by id?

/*
(async () => {

    await producto.addProduct({
            title: "Microfono",
            description: "condenser",
            price: 50,
            thumbnail: "Imagen 0",
            code: "abc122",
            stock: 20,
        })

        
        console.log(await producto.getproducts());
    })()
*/
(async () =>{

    console.log(await producto.deleteProduct(4));
    
})()

/*
async deleteProduct (idDelete){
    const pdelete = await this.getProducts();
    if (pdelete[idDelete-1] === undefined){
        console.log(" No se borro nada ");
}else {
    const newProduct = {}pdelete.splice(idDelete-1, 1);
// console.log("array", pdelete, "array");pdelete.push(newProduct)

deleteById = async id => {
    try {
        const readProducts = await fs.promises.readFile(this.path, 'utf-8');
    const data = JSON.parse(readProducts);
    const obj = data.filter(obj => obj.id !== id);
    await this.writeFile(obj);}
    catch(err) {
        console.log(err);
    }}
    */