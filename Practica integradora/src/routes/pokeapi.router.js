import { Router} from "express";
import pokeModel from "../modules/pokemon.model.js";

const router = Router()

//trae la lista de pokemons
router.get('/', async(req,res)=>{
    const pokemons = await pokeModel.find().lean().exec()
    res.json(pokemons)
})

router.post('/',async(req,res)=>{
    const result = await pokeModel.create(req.body)
    
    res.json(result)
})

router.get('/:name', async (req, res)=>{
    const name = req.params.name
    const pokemon = await pokeModel.findOne({name: name}).lean().exec()
    
    res.render('one', {pokemon})
})


export default router