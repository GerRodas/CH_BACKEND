import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js'

const app = express();

app.engine('handlebars', handlebars.engine()); //Inicializamos el motor de plantilla

app.set('views', __dirname+ '/views'); //Le decimos que renderize con el motor que le pasamos

app.set('view engine', 'handlebars')// seteamos la carpeta de vistas

app.use('/', viewsRouter);

app.get('/', (req,res)=>{
    let testUser={
        name:"German",
        last_name:"Rodas",
        role: "user"
    }
    res.render('index',{
        user: testUser,
        isAdmin: testUser.role === "admin",
        food
    })
})

const server = app.listen(8080, () => console.log('Listening on 8080'))