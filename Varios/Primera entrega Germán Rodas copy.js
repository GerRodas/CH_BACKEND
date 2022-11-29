const fs = require ('fs')

class ProductManager {

    constructor() {
        this.products = []
        this.path = './DataBase.json'
    }
    //Función para agregar un nuevo producto
    async addProduct ({title, description, price, thumbnail, code, stock}) {
        try {
            if (!title, !description, !price, !thumbnail, !code, !stock)
                return {error: "Estos datos son obligatorios"};

        const newProduct = {title, description, price, thumbnail, code, stock};
        const products =await this.getProducts();

        newProduct.ide = !products.length
            ? 1
            : products[products.length - 1].id + 1;
        products.push(newProduct);

        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 3));

        return newProduct;
        }
        catch (error) {
        console.log(error);
        }
    
    }

    //Devuelve los productos cargados
    async getProducts () {
        try {
            // leemos el archivo (asumiendo que existe, o podriamos verificarlo)
            // y convertimos la respuesta a JS con JSON.parse
            const response = await fs.promises.readFile(this.path, "utf-8");
            return JSON.parse(response);
          } 
          catch (error) {
            console.log(error);
          }
        }
    //Devuelve los productos teniendo en cuenta el valor "code"
    getProductById = (productId) => {
        const productFound = this.products.find(element => element.id == productId)
        //Si el producto no es encontrado, devuelve el mensaje "No encontrado"
        if (productFound) {
            console.log("El producto es: ", productFound.title);
        } else {
            console.log("Producto no encontrado. Not found.");
        }
    }


}

const product = new ProductManagerFilesystem("./DataBase.json");
const productOneSaved = await electronicProducts.saveProduct({
    //     code: "CCC333",
    //     title: "Ipad",
    //     description: "Tablet",
    //     price: 700,