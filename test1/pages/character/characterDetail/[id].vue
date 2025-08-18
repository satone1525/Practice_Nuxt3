<script setup lang="ts">
import { addServerImportsDir } from 'nuxt/kit';
import type { Character } from '~/interfaces';

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
const characterList = useState<Map<number, Character>>("characterList");
//キャラクターリストから該当データを取得
const character = computed(
    (): Character => {
        const id = Number (route.params.id);
        return characterList.value.get(id) as Character;
    }
);

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
        <table>
            <tr>
                <td>No：</td>
                <td>{{ character.id}}</td>
            </tr>
            <tr>
                <td>名前：</td>
                <td>{{ character.name }}</td>
            </tr>
            <tr>
                <td>懸賞金：</td>
                <td>{{ character.bounty }}ベリー</td>
            </tr>
        </table>
    </section>
</template>