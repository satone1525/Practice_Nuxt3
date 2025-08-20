import type { Character } from "@/interfaces";

export function createCharacterList(): Map<number, Character> {
  const characterListInit = new Map<number, Character>();
  characterListInit.set(1, { id: 1, name: "ルフィ", bounty: 100000000 });
  characterListInit.set(2, { id: 2, name: "ゾロ", bounty: 60000000 });
  return characterListInit;
}