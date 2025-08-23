<script setup lang="ts">
    // import type {Character} from "../../interfaces";

    definePageMeta({
      layout: "character"
    });

    const PAGE_TITLE = "キャラクターリスト"

    useHead({
      title: PAGE_TITLE
    });

    // キャラクターリストをステートから取得
    // const characterList = useState<Map<number, Character>>("characterList");
    const asyncData = useLazyFetch("/api/getCharacterList");
    const characterList = asyncData.data;
    const pending = asyncData.pending;

</script>

<template>
  <nav id="breadcrumbs">
    <ul>
      <li><NuxtLink v-bind:to="{name: 'index'}">TOP</NuxtLink></li>
      <li>{{ PAGE_TITLE }}</li>
    </ul>
  </nav>
  <section>
    <h2>{{ PAGE_TITLE }}</h2>
    <p>
      追加は<NuxtLink v-bind:to="{name: 'character-characterAdd'}">こちら</NuxtLink>から
    </p>
    <p v-if="pending">データ取得中...</p>
    <section v-else>
      <ul>
        <li
          v-for="character in characterList"
          v-bind:key="character.id">
            <NuxtLink v-bind:to="{name: 'character-characterDetail-id', params: {id: character.id}}">
              No:{{character.id}} {{character.name}}
            </NuxtLink>  
        </li>
      </ul>
    </section>
  </section>
</template>