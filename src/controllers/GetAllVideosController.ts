import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";
import { GetAllVideosService } from "../services/GetAllVideosService";


export class GetAllVideosController {

    async handle(request: Request, response: Response) {

        const service = new GetAllVideosService();

        const result = await service.execute();

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);        
    }

}