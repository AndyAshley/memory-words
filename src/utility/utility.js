import {
  wordList1,
  wordList2,
  wordList3,
  wordList4,
  wordList5,
  sentencePractice5b,
  wordList6,
  wordList7,
  letterList8,
  wordList9,
  wordList10,
  combinedWordLists,
} from "../data/wordLists";

export const changeList = (value) => {
  switch (value) {
    case "wordList1":
      return {
        list: wordList1,
        length: wordList1.length,
        word: wordList1[0],
        type: "word",
        display: "Word List 1",
      };
    case "wordList2":
      return {
        list: wordList2,
        length: wordList2.length,
        word: wordList2[0],
        type: "word",
        display: "Word List 2",
      };
    case "wordList3":
      return {
        list: wordList3,
        length: wordList3.length,
        word: wordList3[0],
        type: "word",
        display: "Word List 3",
      };
    case "wordList4":
      return {
        list: wordList4,
        length: wordList4.length,
        word: wordList4[0],
        type: "word",
        display: "Word List 4",
      };
    case "wordList5":
      return {
        list: wordList5,
        length: wordList5.length,
        word: wordList5[0],
        type: "word",
        display: "Word List 5",
      };
    case "sentencePractice5b":
      return {
        list: sentencePractice5b,
        length: sentencePractice5b.length,
        word: sentencePractice5b[0],
        type: "sentence",
        display: "Sentence Practice 5B",
      };
    case "wordList6":
      return {
        list: wordList6,
        length: wordList6.length,
        word: wordList6[0],
        type: "word",
        display: "Word List 6",
      };
    case "wordList7":
      return {
        list: wordList7,
        length: wordList7.length,
        word: wordList7[0],
        type: "word",
        display: "Word List 7",
      };
    case "letterList8":
      return {
        list: letterList8,
        length: letterList8.length,
        word: letterList8[0],
        type: "word",
        display: "Letter List 8",
      };
    case "wordList9":
      return {
        list: wordList9,
        length: wordList9.length,
        word: wordList9[0],
        type: "word",
        display: "Word List 9",
      };
    case "wordList10":
      return {
        list: wordList10,
        length: wordList10.length,
        word: wordList10[0],
        type: "word",
        display: "Word List 10",
      };
    case "combinedWordList":
      return {
        list: combinedWordLists(),
        length: combinedWordLists().length,
        word: combinedWordLists()[0],
        type: "word",
        display: "All Words",
      };
  }
};
