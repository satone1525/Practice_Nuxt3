import type { Character, ReturnJSONCharacters } from "~/interfaces";
// import { createCharacterList } from "~/charactersDB";

export default defineEventHandler(
    async (event): Promise<ReturnJSONCharacters> => {
        // ルートパラメータを取得
        const params = event.context.params;
        //charactersDB.tsを利用してキャラクターリストのMapオブジェクトを生成
        // const characterList = createCharacterList();

        // 空のキャラクターリストMapオブジェクトの用意
        let characterList = new Map<number, Character>();
        // ストレージの用意
        const storage = useStorage();
        // ストレージからキャラクターリスト情報JSONオブジェクトを取得
        const characterListStorage = await storage.getItem("/character-management/characters");

        // キャラクターリスト情報JSONオブジェクトが存在するなら...
        if(characterListStorage != undefined){
            // キャラクターリスト情報JSONオブジェクトをキャラクターリストMapに変換
            characterList = new Map<number, Character>(characterListStorage as any);
        }

        //ルートパラメータのidを数値に変換
        const idNo = Number(params!.id);    // ! でundefinedでないとする
        //ルートパラメータに該当するキャラクターオブジェクトを取得
        const character = characterList.get(idNo) as Character;
        // 送信データオブジェクトを返す
        return {
            result: 1,
            data: [character]
        }; 
    }
);