<script setup lang="ts">
  //型定義をインポートするときは import type
  import type {Character} from "../interfaces"
  import OneCharacter3 from "./OneCharacter3.vue";
  
  //キャラクターリストをステートから取得。
  const characterList = useState<Map<number, Character>>("characterList");

  //懸賞金合計の算出プロパティ
  const totalBounty = computed(
    (): number => {
      let total = 0;
      for(const character of characterList.value.values()){
        total += character.bounty;
      }
      return total;
    }
  );
</script>

<template>
  <section>
    <h1> キャラクターリスト </h1>
    <p> 懸賞金の合計：{{ totalBounty }} </p>
    <OneCharacter3
      v-for="id in characterList.keys()"
      v-bind:key="id"
      v-bind:id="id"/>
  </section>
</template>