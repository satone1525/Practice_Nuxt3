import type { Character } from "@/interfaces";
import { createCharacterList } from "@/charactersDB";

export default defineEventHandler(
    (event): Character[] => {
        // オブジェクトを生成
        const characterList = createCharacterList();
        // 値部分を取得
        const characterListValues = characterList.values();
        // 値部分を配列にする
        const characterListArray = Array.from(characterListValues);
        return characterListArray;
    }
);