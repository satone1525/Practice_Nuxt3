import type { Character, ReturnJSONCharacters } from "~/interfaces";

export default defineEventHandler(
    async (event): Promise<ReturnJSONCharacters> => {
        const body = await readBody(event);
        const character = body as Character;
        console.log(character);
        return{ 
            result: 1,  
            data: [character]     
        };      
    }
);
