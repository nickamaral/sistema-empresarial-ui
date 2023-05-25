import { ClienteModel } from "./cliente-model.interface"

export interface ClienteLog{
    id:Number,
    cliente:ClienteModel,
    dataHora:Date,
	statusDoLog:string,
    sala:string,
}
