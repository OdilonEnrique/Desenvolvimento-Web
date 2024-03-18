import { Request } from "express"
import { Response } from "express"

export const userControllers = {
    create(req: Request, res: Response){
        res.send({message: "created!"})
    },
    
    read(req: Request, res: Response){
        res.send({message: "read!"})
    },
    
    update(req: Request, res: Response){
        res.send({message: "updated!"})
    },

    delete(req: Request, res: Response){
        res.send({message: "deleted!"})
    }
}