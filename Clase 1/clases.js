class Contador{
    constructor(responsable){
        this.responsable = responsable
        this.cont_local = 0
    }

    static cont_global = 0

    getResponsable = () => {
        return this.responsable
    
    }

    count = () => {
        this.cont_local++
        Contador.cont_global++
    }
    getResponsable = () => {return this.cont_local}
    getResponsable = () => {return this.cont_global}
}

