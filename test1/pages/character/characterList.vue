<script setup lang="ts">
    import type {Character} from "../../interfaces";

    const characterList = useState<Map<number, Character>>("characterList");
</script>

<template>
  <h1>キャラクター設定</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>TOP</li>
      <li>キャラクターリスト</li>
    </ul>
  </nav>
  <section>
    <h2>キャラクターリスト</h2>
    <p>
      追加はこちらから
    </p>
    <section>
      <ul>
        <li
          v-for="[id, character] in characterList"
          v-bind:key="id">
            No:{{id}} {{character.name}}
        </li>
      </ul>
    </section>
  </section>
</template>