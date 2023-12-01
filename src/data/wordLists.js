const wordList1 = ["is", "a", "like", "the", "went", "to"];
const wordList2 = ["look", "for", "you", "I", "was", "we"];
const wordList3 = ["she", "little", "have", "my", "said", "no"];
const wordList4 = ["do", "where", "get", "of", "and", "put"];
const wordList5 = ["he", "are", "me", "from", "some", "here"];
const sentencePractice5b = [
  "The Pencil.",
  "I have the crayon.",
  "The scissors are little.",
  "Where is the marker?",
  "I like the lunch.",
];
const wordList6 = ["what", "in", "that", "it", "on", "as", "there"];

const listSelectOptions = [
  { value: "wordList1", label: "Word List 1" },
  { value: "wordList2", label: "Word List 2" },
  { value: "wordList3", label: "Word List 3" },
  { value: "wordList4", label: "Word List 4" },
  { value: "wordList5", label: "Word List 5" },
  { value: "sentencePractice5b", label: "Sentence Practice 5B" },
  { value: "wordList6", label: "Word List 6" },
  { value: "combinedWordList", label: "All Words" },
];

const combinedWordLists = (
  lists = [wordList1, wordList2, wordList3, wordList4, wordList5, wordList6]
) => {
  let combinedList = [];
  lists.forEach((list) => {
    combinedList = combinedList.concat(list);
  });
  return combinedList;
};

export {
  wordList1,
  wordList2,
  wordList3,
  wordList4,
  wordList5,
  sentencePractice5b,
  wordList6,
  combinedWordLists,
  listSelectOptions,
};
