import type { Character, ReturnJSONCharacters } from "~/interfaces";
import { createCharacterList } from "~/charactersDB";

export default defineEventHandler(
    (event): ReturnJSONCharacters => {
        // ルートパラメータを取得
        const params = event.context.params;
        //charactersDB.tsを利用してキャラクターリストのMapオブジェクトを生成
        const characterList = createCharacterList();
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