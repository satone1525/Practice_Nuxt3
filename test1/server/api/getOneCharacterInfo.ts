import type { Character } from "~/interfaces";
import { createCharacterList } from "../../charactersDB";

export default defineEventHandler(
    (event) : Character => {
        //クエリパラメータを取得
        const query = getQuery(event);
        //オブジェクトを生成
        const characterList = createCharacterList();
        const idNo = Number(query.id);
        const Character = characterList.get(idNo) as Character;
        return Character;
    }
);