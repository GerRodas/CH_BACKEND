import ToyService from "../../services/toy.service.js"


class ToyController {
    constructor() {
        this.ToyService = new ToyService()

    }
    readData =  () => {
        return ({name: 'Buddy', type: 'trapo'})
    }
    create = data => {
        return data
    }
}


export default ToyController