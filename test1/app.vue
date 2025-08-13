<script setup lang="ts">
  // // import Nami from '../components/Nami.vue';
  // import OneCharacter from '../components/OneCharacter2.vue';
  // // import Luffy from '../components/monkey/Luffy.vue';
  // import BaseSection from '../components/BaseSection.vue'

  
  //型定義をインポートするときは import type
  import type {Character} from "./interfaces";


  //キャラクターリストデータ
  useState<Map<number, Character>>(
    "characterList",    //ステート名
    (): Map<number, Character> => {   //初期値を生成
      const characterListInt = new Map<number, Character>();
      characterListInt.set(1,{id: 1, name: "ルフィ", bounty: 100000000});
      characterListInt.set(2,{id: 2, name: "ゾロ", bounty: 60000000});
      return characterListInt;
    }
  );  //characterListでデータの取り出しが可

  const onIncrementBounty = (id: number) : void => {
    //オブジェクトを取得
    const character = characterList.value.get(id);
    //オブジェクトが存在するなら
    if(character != undefined){
      //懸賞金アップ
      character.bounty += 1000;
    }
  }

</script>

<template>
  <header>
    <h1>ワンピース</h1>
  </header>
  <main>
    <NuxtPage/>
  </main>
</template>

<style>
  main{
    border: black 5px solid;
    padding: 10px;
  }

  #breadcrumbs ul li{
    display: inline;
    list-style-type: none;
  }

  #breadcrumbs ul{
    padding-left: 0px;
  }

  #breadcrumbs ul li::before{
    content: ">";
  }

  #breadcrumbs ul li:first-child:before{
    content: none;
  }
</style>