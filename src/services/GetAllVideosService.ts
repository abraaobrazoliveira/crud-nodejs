import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/video";


export class GetAllVideosService {
    
    async execute() {
       const repo = getRepository(Video);
        
       const videos = await repo.find({
           relations: ["category"]
       });

       return videos;
    }

}