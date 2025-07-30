<script setup lang="ts">
  // import Nami from '../components/Nami.vue';
  import OneCharacter from '../components/OneCharacter.vue';
  // import Luffy from '../components/monkey/Luffy.vue';

  //キャラクターリストデータ
  const characterListInt = new Map<number, Character>();
  characterListInt.set(1,{id:1, name: "ルフィ", bounty: 100000000});
  characterListInt.set(2,{id:2, name: "ゾロ", bounty: 60000000});
  const characterList = ref(characterListInt);

  //懸賞金合計の算出プロパティ
  const totalBounty = computed(
    (): number => {
      let total = 0;
      for(const character of characterList.value.values()){
        total += character.bounty;
      }
      return total;
    }
  )


  //キャラクターインターフェース
  interface Character{
    id : number;
    name : string;
    bounty : number;
  }
</script>

<template>
  <section>
    <h1>キャラクターリスト</h1>
    <p>懸賞金の合計: {{ totalBounty }}</p>
    <OneCharacter
      v-for="[id, character] in characterList"
      :key = "id"
      :name = "character.name"
      :bounty="character.bounty"
    />
  </section>
</template>

<style>
  section{
    border: blue 5px solid;
    margin: 10px;
  }

</style>