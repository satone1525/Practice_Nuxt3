<script setup lang="ts">
import type { Character } from '~/interfaces';
// import CharacterList from '../characterList.vue';

definePageMeta({
    layout: "character"
});

const PAGE_TITLE = "キャラクター詳細情報"

useHead({
    title: PAGE_TITLE
});

//ルートオブジェクト（ルートに関する情報を取得）を取得。
const route = useRoute();

// route.name => character-characterDetail-id
// route.path => /character/characterDetail/1
// route.params => { id: 1 }

//キャラクターリストをステートから取得
// const characterList = useState<Map<number, Character>>("characterList");

// ★useAsyncData関数を使うバージョン
const asyncData = useLazyAsyncData(
    `/CharacterInfo/${route.params.id}`,    //キー文字（重複実行を避ける）
    (): Promise<any> => {   //取得データの型
        const characterInfoUrl = "/api/getOneCharacterInfo"     //アクセス先URLのクエリパラメータ以外を用意
        //クエリパラメータの元データを用意  ★ここが動画と違う！！（エラー解決のために少し変更してある）
        const params = {
            id: route.params.id as string
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

// ------------------------------------------------------------------------------------------------------------

//クエリパラメータの元データを用意  ★ここが動画と違う！！（エラー解決のために少し変更してある）
// const params = {
//     id: route.params.id as string
// };
// //★useFetch関数を使うバージョン(useAsyncData関数よりも簡単)
// const asyncData = await useFetch(
//     "/api/getOneCharacterInfo",     //アクセス先URL：第一引数
//     {                               //第二引数
//         key:`/CharacterInfo/${route.params.id}`,    //キー文字（重複実行を避ける）
//         query:params
//     }
// );
// //dataプロパティを取り出して代入
// const character = asyncData.data;

// ------------------------------------------------------------------------------------------------------------

// ★useAsyncData関数を使うバージョン
// const asyncData = await useAsyncData(
//     `/CharacterInfo/${route.params.id}`,    //キー文字（重複実行を避ける）
//     (): Promise<any> => {   //取得データの型
//         const characterInfoUrl = "/api/getOneCharacterInfo"     //アクセス先URLのクエリパラメータ以外を用意
//         //クエリパラメータの元データを用意  ★ここが動画と違う！！（エラー解決のために少し変更してある）
//         const params = {
//             id: route.params.id as string
//         };
//         const queryParams = new URLSearchParams(params);//クエリパラメータを生成
//         const urlFull = `${characterInfoUrl}?${queryParams}`    //URL作成
//         //URLに非同期でアクセスしてデータを取得
//         const response = $fetch(urlFull);
//         return response;    //取得データ

//         //メモ
//         // useAsyncData()の戻り値は4つある！！
//         // (1)data：取得したデータ
//         // (2)pending：データ取得が終了したかを表すbool値
//         // (3)refresh：データを再取得する関数
//         // (4)データ取得に失敗した際のエラーオブジェクト
//     }
// );

//dataプロパティを取り出して代入
// const character = asyncData.data;

// ------------------------------------------------------------------------------------------------------------

</script>

<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li><NuxtLink v-bind:to="{name: 'character-characterList'}">キャラクターリスト</NuxtLink></li>
            <li>{{ PAGE_TITLE }}</li>
        </ul>
    </nav>
    <section>
        <h2>{{ PAGE_TITLE }}</h2>
        <p v-if="pending">データ取得中...</p>
        <table v-else>
            <!-- 
             (1)character が 存在する場合 → character.id を表示する
             (2)character が undefined や null の場合 → エラーにならずに undefined を返す
             ※Vue のテンプレートでは undefined は空文字として表示されるので、画面上には何も出なくなります。 -->
            <tr>
                <td>No：</td>
                <td>{{ character?.id}}</td>
            </tr>
            <tr>
                <td>名前：</td>
                <td>{{ character?.name }}</td>
            </tr>
            <tr>
                <td>懸賞金：</td>
                <td>{{ character?.bounty }}ベリー</td>
            </tr>
        </table>
    </section>
</template>