export class ErrorModelApi{
    error: string
    message: string
    path: string
    timestamp: Date
    status: number
    errors: any[]

    constructor(objetoDeErroDaAPI:any){
        this.error=objetoDeErroDaAPI.error
        this.message=objetoDeErroDaAPI.message
        this.path=objetoDeErroDaAPI.path
        this.timestamp=objetoDeErroDaAPI.timestamp
        this.status=objetoDeErroDaAPI.status
        this.errors=objetoDeErroDaAPI.errors

    }
    getMensagemDeErro(){
        if(!this.errors){
            return this.message
        }else {
            return this.errors.map(e=>e.defaultMessage).join(", ")
        }
    }
}

