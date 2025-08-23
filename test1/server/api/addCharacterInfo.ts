export default defineEventHandler(
    async(event) => {
        const body = await readBody(event);
        // 本来はDBなどに保存
        console.log(body);
        return{     //サーバーAPIエンドポイント側の処理が
            result: 1,  //常に成功したことにする
            character: body
        };      //入力されたキャラクター情報オブジェクトbody
    }           //をそのままcharacterプロパティにする
)