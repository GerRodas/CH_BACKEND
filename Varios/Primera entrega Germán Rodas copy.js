class ProductManager {

    constructor() {
        this.products = []
        this.path = './DataBase.json'
    }
    //Función para agregar un nuevo producto
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.getProductId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        //Chequear códigos duplicados
        const duplicatedCode = (element) => element.code == product.code;
        if (!this.products.some(duplicatedCode)) {
            this.products.push(product)
        } else {
            console.log("Un código está duplicado y es", product.title, "con el code número", product.id)
        }
    }
    //Generar el id del producto
    getProductId = () => {
        const amount = this.products.length;
        const productId = (amount > 0) ? this.products[amount - 1].id + 1 : 1;
        return productId;
    }
    //Devuelve los productos cargados
    getProducts = () => {
        return this.products
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
//Se crea la constante "product"
const product = new ProductManager()
//Prueba sin nada cargado
console.log("Productos cargados:", product.getProducts());
console.log("-----------------------------------------------")
//Se empieza a cargar datos
product.addProduct("Auricular", "con cable", 25, "image", "codigo 1", 4)
product.addProduct("Auricular", "con cable", 25, "image", "codigo 1", 2)
product.addProduct("Parlantes", "Bluetooth", 80, "image", "codigo 56", 4)
product.addProduct("Mouse", "Inalambrico", 45, "image", "codigo 4", 4)
console.log("-----------------------------------------------")
//Se ingresa un número de "code" para probar
product.getProductById(2)
console.log("-----------------------------------------------")
//Se prueba lo mismo que la primera prueba, pero con los datos. Devuelve todo.
console.log("Productos cargados:", product.getProducts());