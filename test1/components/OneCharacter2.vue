<script setup lang="ts">
// 1. 子でpropsの準備
//親から受け取るプロパティはdefineProps()で型宣言する
//(1)Propsインターフェース（プロパティ・型）の定義
interface Props{
    id: number; 
    name: string;
    bounty: number;
}

//Emits型を定義
type Emits = {
    incrementBounty : [id: number];
};

//(2)definePropsを実行し、Propsオブジェクトの設定
const props = defineProps<Props>();

//Emitの設定
const emit = defineEmits<Emits>();

//値を監視し、変更が検知される状態にする
// const bounty = ref(props.bounty);

//「懸賞金アップ」ボタンをクリックしたときのメソッド
const bountyUp = () : void =>{
    emit("incrementBounty", props.id);
}

</script>

<template>
    <section class="box">
        <p>{{ name }}</p>
        <p>懸賞金 : {{ bounty }} ベリー</p>
        <button @click="bountyUp">賞金アップ</button>
    </section>
</template>

<style scoped>
    .box{
        border: black 5px solid;
        margin: 3px;
        padding: 10px;
    }
</style>