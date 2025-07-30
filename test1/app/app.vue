<script setup lang="ts">
  const gomugomu = Math.round(Math.random() * 100);
  const marchenGomuGomu = gomugomu * 10;
</script>

<template>
  <p>
    {{ gomugomu }} ゴムゴムは {{ marchenGomuGomu }} メルヘンゴムゴム
  </p>
</template>

<style>
  p{
    color: red;
  }

</style>