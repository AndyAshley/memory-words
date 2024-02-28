import { listArray } from "../data/wordLists";

// a single function that handles the list to return
export const changeList = (value) => {
  const data = listArray.find((list) => list[value])[value];
  const list = data.list;
  const type = data.type;
  const display = data.display;

  return {
    list,
    length: list.length,
    word: list[0],
    type,
    display,
  };
};
