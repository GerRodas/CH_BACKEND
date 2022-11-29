class ProductManagerFilesystem {
    constructor(path)
        async saveProduct({ title, description, price, code }) {
            try {
            // Validamos producto (aunque esto ya es más del desafio anterior)
            if (!title || !description || !price || !code)
                return { error: "Las variables son obligatorias" };

            const newProduct = { title, description, price, code };
            // vamos a buscar el array de products, para no hacer el readfile aca podemos reutilizar el metodo getProducts
            const products = await this.getProducts();

            newProduct.id = !products.length
                ? 1
                : products[products.length - 1].id + 1;

            products.push(newProduct);

            await fs.promises.writeFile(this.path, JSON.stringify(products, null, 3));

            return newProduct;
            } catch (error) {
            console.log(error);
            }
    }