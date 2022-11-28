const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./Productos.json";
  }
  //Función para agregar un nuevo producto
  addProduct = async (title, description, price, thumbnail, code, stock) => {
    const product = {
      id: this.getProductId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    //Chequear códigos duplicados
    const duplicatedCode = (element) => element.code == product.code;
    if (!this.products.some(duplicatedCode)) {
      this.products.push(product);
    } else {
      console.log(
        "Un código está duplicado y es",
        product.title,
        "con el code número",
        product.id
      );
    }
    //agregar el guardado a archivo del addProduct con un append
    const prod = JSON.stringify(product)    
    const result = await fs.promises.writeFile(this.path, prod)
    return (result)
  }
  };
  //Generar el id del producto
  getProductId = () => {
    const amount = this.products.length;
    const productId = amount > 0 ? this.products[amount - 1].id + 1 : 1;
    return productId;
  };
  
  const product = new ProductManager();
  product.addProduct("Auricular", "con cable", 25, "image", "codigo 1", 4);

  /*
  //Devuelve los productos cargados
  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      console.log("El archivo existe");
      const activeFile = await fs.promise.readFile(this.path, "utf-8");
      const savedFile = JSON.parse(activeFile);
      return savedFile;
    } else {
      return [];
    }
  };
  //Devuelve los productos teniendo en cuenta el valor "code"
  getProductById = (productId) => {
    const productFound = this.products.find(
      (element) => element.id == productId
    );
    //Si el producto no es encontrado, devuelve el mensaje "No encontrado"
    if (productFound) {
      console.log("El producto es: ", productFound.title);
    } else {
      console.log("Producto no encontrado. Not found.");
    }
  };
  updateProduct = (productId) => {
    const productFound = this.products.find(
      (element) => element.id == productId
    );
  };

//Se crea la constante "product"
const product = new ProductManager();
//Prueba sin nada cargado
console.log("Productos cargados:", product.getProducts());
console.log("-----------------------------------------------");
//Se empieza a cargar datos
product.addProduct("Auricular", "con cable", 25, "image", "codigo 1", 4);
product.addProduct("Auricular", "con cable", 25, "image", "codigo 1", 2);
product.addProduct("Parlantes", "Bluetooth", 80, "image", "codigo 56", 4);
product.addProduct("Mouse", "Inalambrico", 45, "image", "codigo 4", 4);
console.log("-----------------------------------------------");
//Se ingresa un número de "code" para probar
product.getProductById(2);
console.log("-----------------------------------------------");
//Se prueba lo mismo que la primera prueba, pero con los datos. Devuelve todo.
console.log("Productos cargados:", product.getProducts());



const DB = product.getProducts();

const jsonStr = JSON.stringify(DB);
fs.promises
  .writeFile("DB.json", jsonStr)
  .then(() => {
    console.log("DB saved!");
  })
  .catch((e) => {
    console.error("ERROR", e);
  });

console.log(jsonStr);
*/





