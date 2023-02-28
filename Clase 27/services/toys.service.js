import { ToyModel } from "../models/toys.model.js"


class ToyService {
    constructor() {
        this.ToyModel = new ToyService()

    }
    getAll =  () => {
        return this.ToyModel.getAll()
    }
    create = data => {
        return this.ToyModel.create(data)
    }
}


export default ToyService