<script setup lang="ts">
import type { Character } from '@/interfaces';
import OneCharacter from '~/components/OneCharacter .vue';

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
const selectedCharacter = ref(selectedCharacterInit);

const asyncData = await useAsyncData(
    (): Promise<any> => {   //取得データの型
        const characterInfoUrl = "/api/getOneCharacterInfo";    //アクセス先URLのクエリパラメータ以外を用意
        //クエリパラメータの元データを用意  ★ここが動画と違う！！（エラー解決のために少し変更してある）
        const params : {
            id: string;
        } = {
            id: String(selectedCharacterId.value),
        };
        const queryParams = new URLSearchParams(params);//クエリパラメータを生成
        const urlFull = `${characterInfoUrl}?${queryParams}`;    //URL作成
        //URLに非同期でアクセスしてデータを取得
        const response = $fetch(urlFull);
        return response;    //取得データ
    }
);

// dataプロパティを取り出して代入
const character = asyncData.data;
const pending = asyncData.pending;      //データ取得中なら1になる
const refresh = asyncData.refresh;

const OneCharacterChanged = () => {
    selectedCharacter.value = characterList.value.get(selectedCharacterId.value) as Character;
    // refreshプロパティを関数として実行すると、useAsyncData()が再実行される
    refresh();
}

</script>


<template>
    <nav id="breadcrumbs">
        <ul>
            <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
            <li><NuxtLink v-bind:to="{name: 'character-characterList'}">キャラクターリスト</NuxtLink></li>
            <li>{{ PAGE_TITLE }}</li>
        </ul>
    </nav>
    
    <!-- ドロップダウンリストの作成 -->
    <section>
        <h2>{{ PAGE_TITLE }}</h2>
        <label>
            キャラクター:
            <select v-model="selectedCharacterId" v-on:change="OneCharacterChanged">
                <option v-for="[id, character] in characterList" v-bind:key="id" v-bind:value="id">
                    {{ character.name }}
                </option>
            </select>
        </label>
    </section>

    <!-- 懸賞金を表示する -->
    <p v-if="pending">データ取得中...</p>
    <section v-else>
       <p>{{ selectedCharacter.bounty }}ベリー</p>
    </section> 
</template>

