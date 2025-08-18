<script setup lang="ts">
import type {character} from "@/interfaces"

const PAGE_TITLE = "キャラクター追加"

useHead({
    title: PAGE_TITLE
});

//ルータオブジェクトを取得
const router = useRouter();
// router.push() => 指定の居場所へ
// router.back() => 履歴上で１つ前の画面

//キャラクターリストをステートから取得
const characterList = useState<Map<number, Character>>("characterList");
//入力データと同期させるCharacterオブジェクトの用意
const character: Character = reactive(
    {
        id: 0,
        name: "",
        bounty: 0,
    }
)

const onAdd = (): void => {
    characterList.value.set(character.id, character);
    router.push({name: "character-characterList"})
};
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
        <p>
            情報を入力し、登録ボタンを押してください
        </p>
        <form v-on:submit.prevent="onAdd">
            <table>
                <tr>
                    <td>
                        <label for="addId">No:</label>
                    </td>
                    <td>
                        <input type="number" id="addId" v-model.number="character.id" required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="addName">名前</label>
                    </td>
                    <td>
                        <input type="text" id="addName" v-model="character.name" required></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="addBounty">懸賞金：</label>
                    </td>
                    <td>
                        <input type="number" id="addBounty" v-model.number="character.bounty" required>
                    </td>
                </tr>
            </table>
            <button type="submit">登録</button>
        </form>
    </section>
</template>