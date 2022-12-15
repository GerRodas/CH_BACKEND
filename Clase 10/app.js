import { express } from 'express'

import handlebars from 'express-handlebars'

import __dirname from './utils.js'


const app = express()



app.engine('handlebars', handlebars.engine()) //Inicializamos el motor de plantilla

app.settings('src', 'src')// seteamos la carpeta de vistas

app.set('view engine', 'handlebars') //Le decimos que renderize con el motor que le pasamos

app.get('/', (req, res) => {
    const testUser = {
        nombre: "pablo",
        lastname : "magliore"
    }
})

const server = app.listen(8080, () => console.log('Listening on 8080'))