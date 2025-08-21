<script lang="ts">
import type { Character } from '~/interfaces';

definePageMeta({
    layout: "character"
});

const PAGE_TITLE = "キャラクター懸賞金"

useHead({
    title: PAGE_TITLE,
});

//キャラクターリストをステートから取得
const characterList = useState<Map<number, Character>>("characterList");
//初期IDをルフィに設定
const selectedCharacterId = ref(1)
//初期情報を取得
const selectedCharacterInit = characterList.value.get(selectedCharacterId.value) as Character;
//キャラクター情報のテンプレート変数を用意
const selectedCharacter = ref(selectedCharacterInit)

const asyncData = await useAsyncData(
    (): Promise<any> => {   //取得データの型
        const characterInfoUrl = "/api/getOneCharacterInfo"     //アクセス先URLのクエリパラメータ以外を用意
        //クエリパラメータの元データを用意  ★ここが動画と違う！！（エラー解決のために少し変更してある）
        const params = {
            id: selectedCharacter.id as string
        };
        const queryParams = new URLSearchParams(params);//クエリパラメータを生成
        const urlFull = `${characterInfoUrl}?${queryParams}`    //URL作成
        //URLに非同期でアクセスしてデータを取得
        const response = $fetch(urlFull);
        return response;    //取得データ
    }
);

// dataプロパティを取り出して代入
const character = asyncData.data;
const pending = asyncData.pending;      //データ取得中なら1になる

</script>