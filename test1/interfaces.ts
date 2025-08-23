  //キャラクターインターフェース
  export interface Character{
    id : number;
    name : string;
    bounty : number;
  }

  export interface ReturnJSONCharacters{
    result: number;
    data: Character[];
  }