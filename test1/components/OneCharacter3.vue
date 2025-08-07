<script setup lang="ts">
//型定義をインポートするときは import type
import type {Character} from "../interfaces";
//①子でPropsの準備
//親から受け取るプロパティはdefineProps()で型宣言する
//(1)Propsインターフェース(プロパティ・型)の定義
interface Props {
  id: number;
}

//(2)definePropsを実行しPropsオブジェクトの設定。
const props = defineProps<Props>();
//キャラクターリストをステートから取得。
const characterList = useState<Map<number, Character>>("characterList");

//該当するキャラを取得。
const character = characterList.value.get(props.id) as Character;

//［懸賞金アップ］ボタンをクリックしたときのメソッド。
const bountyUp = (): void => {
  character.bounty += 1000;
}
</script>


<template>
  <section class="box">
    <p>{{character.name}}</p>
    <p>懸賞金：{{character.bounty}}ベリー</p>
    <button v-on:click="bountyUp">懸賞金アップ</button>
  </section>
</template>

<style scoped>
.box {
  border: black 5px solid;
  margin: 3px;
  padding: 10px
}
</style>
