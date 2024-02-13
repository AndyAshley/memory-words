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
  wordList11,
  wordList12,
  wordList13,
  wordList14,
  wordList15,
  sentencePractice15b,
  wordList16,
  wordList17,
  wordList1Through12,
  wordList13Plus,
  allWordLists,
} from "../data/wordLists";

// lets make a single function that handles the list to return instead of a switch statement
// this will make it easier to add new lists in the future
const changelist = (value) => {
  let type = value.includes("sentence") ? "sentence" : "word";

  return {
    list: value,
    length: value.length,
    word: value[0],
    type: type,
    display: value,
  };
};

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
    case "wordList11":
      return {
        list: wordList11,
        length: wordList11.length,
        word: wordList11[0],
        type: "word",
        display: "Word List 11",
      };
    case "wordList12":
      return {
        list: wordList12,
        length: wordList12.length,
        word: wordList12[0],
        type: "word",
        display: "Word List 12",
      };
    case "wordList13":
      return {
        list: wordList13,
        length: wordList13.length,
        word: wordList13[0],
        type: "word",
        display: "Word List 13",
      };
    case "wordList14":
      return {
        list: wordList14,
        length: wordList14.length,
        word: wordList14[0],
        type: "word",
        display: "Word List 14",
      };
    case "wordList15":
      return {
        list: wordList15,
        length: wordList15.length,
        word: wordList15[0],
        type: "word",
        display: "Word List 15",
      };
    case "sentencePractice15b":
      return {
        list: sentencePractice15b,
        length: sentencePractice15b.length,
        word: sentencePractice15b[0],
        type: "sentence",
        display: "Sentence Practice 15B",
      };
    case "wordList16":
      return {
        list: wordList16,
        length: wordList16.length,
        word: wordList16[0],
        type: "word",
        display: "Word List 16",
      };
    case "wordList17":
      return {
        list: wordList17,
        length: wordList17.length,
        word: wordList17[0],
        type: "word",
        display: "Word List 17",
      };
    case "wordList1Through12":
      return {
        list: wordList1Through12,
        length: wordList1Through12.length,
        word: wordList1Through12[0],
        type: "word",
        display: "Word List 1-12",
      };
    case "wordList13Plus":
      return {
        list: wordList13Plus,
        length: wordList13Plus.length,
        word: wordList13Plus[0],
        type: "word",
        display: "Word List 13+",
      };
    case "allWordLists":
      return {
        list: allWordLists,
        length: allWordLists.length,
        word: allWordLists[0],
        type: "word",
        display: "All Words",
      };
  }
};
