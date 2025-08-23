import type { ReturnJSONCharacters } from "~/interfaces";
import { createCharacterList } from "~/charactersDB";

export default defineEventHandler(
    (event): ReturnJSONCharacters => {
        // オブジェクトを生成
        const characterList = createCharacterList();
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

