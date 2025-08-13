<script setup lang="ts">
    import type {Character} from "../../interfaces";

    const characterList = useState<Map<number, Character>>("characterList");
</script>

<template>
  <h1>キャラクター設定</h1>
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
      <li>キャラクターリスト</li>
    </ul>
  </nav>
  <section>
    <h2>キャラクターリスト</h2>
    <p>
      追加は<NuxtLink v-bind:to="{name: 'character-characterAdd'}">こちら</NuxtLink>から
    </p>
    <section>
      <ul>
        <li
          v-for="[id, character] in characterList"
          v-bind:key="id">
            <NuxtLink v-bind:to="{name: 'character-characterDetail-id', params: {id: id}}">
              No:{{id}} {{character.name}}
            </NuxtLink>  
        </li>
      </ul>
    </section>
  </section>
</template>