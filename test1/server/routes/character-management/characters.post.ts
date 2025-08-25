import type { Character, ReturnJSONCharacters } from "~/interfaces";

export default defineEventHandler(
    async (event): Promise<ReturnJSONCharacters> => {
        const body = await readBody(event);
        const character = body as Character;
        // console.log(character);

        // 空のキャラクターリストMapオブジェクトの用意
        let characterList = new Map<number, Character>();
        // ストレージの用意
        const storage = useStorage();
        // ストレージからキャラクターリスト情報JSONオブジェクトを取得
        const characterListStorage = await storage.getItem("local:character-management_characters");

        // キャラクターリスト情報JSONオブジェクトが存在するなら...
        if(characterListStorage != undefined){
            // キャラクターリスト情報JSONオブジェクトをキャラクターリストMapに変換
            characterList = new Map<number, Character>(characterListStorage as any);
        }

        // Mapオブジェクトにデータを追加
        characterList.set(character.id, character);
        // Mapオブジェクトを上書きし、ストレージに格納                      Map→JSON（入れ子の配列オブジェクト）
        await storage.setItem("local:character-management_characters", [...characterList]);

        return{ 
            result: 1,  
            data: [character]     
        };      
    }
);
