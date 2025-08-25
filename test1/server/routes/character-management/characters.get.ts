import type { Character ,ReturnJSONCharacters } from "~/interfaces";
// import { createCharacterList } from "~/charactersDB";

export default defineEventHandler(
    async (event): Promise<ReturnJSONCharacters> => {
        // 空のキャラクターリストMapオブジェクトの用意
        let characterList = new Map<number, Character>();
        // オブジェクトを生成
        // const characterList = createCharacterList();
        // ストレージの用意
        const storage = useStorage();
        // ストレージからキャラクターリスト情報JSONオブジェクトを取得       ↓データを区別するためのキー文字列
        const characterListStorage = await storage.getItem("local:character-management_characters");
        // getItem()メソッドを行うと自動的に文字列をJSONオブジェクトにしてくれる

        // キャラクターリスト情報JSONオブジェクトが存在するなら...
        if(characterListStorage != undefined){
            // キャラクターリスト情報JSONオブジェクトをキャラクターリストMapに変換
            characterList = new Map<number,Character>(characterListStorage as any)
        }

        // 値部分を取得
        const characterListValues = characterList.values();
        // 値部分を配列にする
        const characterListArray = Array.from(characterListValues);
        // 送信データオブジェクトを返す
        return {
            result: 1,
            data: characterListArray
        }
    }
);

