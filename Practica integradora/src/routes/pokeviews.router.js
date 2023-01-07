import { Router} from "express";
import pokeModel from "../modules/pokemon.model.js";

const router = Router()


router.get('/', async(req,res)=>{
    const pokemons = await pokeModel.find()
    res.render("index", {})
})

router.get('/create',(req,res)=>{
    res.render('create',{})
})

router.get('/:name', async (req, res)=>{
    const name = req.params.name
    const pokemon = await pokeModel.findOne({name: name}).lean().exec()
    
    res.render('one', {pokemon})
})

export default router