import {
  wordList1,
  wordList2,
  wordList3,
  wordList4,
  wordList5,
  sentencePractice5b,
  wordList6,
} from "../data/wordLists";

export const changeList = (value) => {
  switch (value) {
    case "wordList1":
      return {
        list: wordList1,
        length: wordList1.length,
        word: wordList1[0],
        type: "word",
      };
    case "wordList2":
      return {
        list: wordList2,
        length: wordList2.length,
        word: wordList2[0],
        type: "word",
      };
    case "wordList3":
      return {
        list: wordList3,
        length: wordList3.length,
        word: wordList3[0],
        type: "word",
      };
    case "wordList4":
      return {
        list: wordList4,
        length: wordList4.length,
        word: wordList4[0],
        type: "word",
      };
    case "wordList5":
      return {
        list: wordList5,
        length: wordList5.length,
        word: wordList5[0],
        type: "word",
      };
    case "sentencePractice5b":
      return {
        list: sentencePractice5b,
        length: sentencePractice5b.length,
        word: sentencePractice5b[0],
        type: "sentence",
      };
    case "wordList6":
      return {
        list: wordList6,
        length: wordList6.length,
        word: wordList6[0],
        type: "word",
      };
  }
};
