import express from 'express'
import __dirname from './utils.js';
import pokeRouter from './routes/pokeapi.router.js'
import pokeViews from './routes/pokeviews.router.js'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'


const app = express();

//Para traer la informacion de post con JSON
app.use(express.json())


//Configuramos el motoro de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//Configuramos carpeta publica
app.use(express.static(__dirname + '/public'))


//rutas vistas
app.use('/pokemon', pokeViews)
// rutas de API
app.use('/api/pokemon', pokeRouter)


app.get('/', (req,res)=>{res.send('funciona!')})

const MONGO_URI = 'mongodb+srv://german:1122334455@pokedex.w3l7las.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
mongoose.connect(MONGO_URI, error=>{
    if(error){
        console.error('No se pudo conectar a la DB')
        return
    }
    console.log('DB connected');
    app.listen(8080, ()=> console.log('Server listening...'))
})
   

