// Word lists based on my sons take home sight word lists
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
const wordList7 = ["with", "his", "they", "at", "be", "this"];
const letterList8 = ["x", "q", "y", "w", "z", "k", "j"];
const wordList9 = ["not", "all", "were", "when", "your", "can"];
const wordList10 = ["there", "use", "an", "each", "which", "how"];
const wordList11 = ["their", "if", "will", "up", "other", "about"];
const wordList12 = ["out", "many", "then", "them", "these", "so"];

// for the select dropdown
const listSelectOptions = [
  { value: "wordList1", label: "Word List 1" },
  { value: "wordList2", label: "Word List 2" },
  { value: "wordList3", label: "Word List 3" },
  { value: "wordList4", label: "Word List 4" },
  { value: "wordList5", label: "Word List 5" },
  { value: "sentencePractice5b", label: "Sentence Practice 5B" },
  { value: "wordList6", label: "Word List 6" },
  { value: "wordList7", label: "Word List 7" },
  { value: "letterList8", label: "Letter List 8" },
  { value: "wordList9", label: "Word List 9" },
  { value: "wordList10", label: "Word List 10" },
  { value: "wordList11", label: "Word List 11" },
  { value: "wordList12", label: "Word List 12" },
  { value: "combinedWordList", label: "All Words" },
];

// combine all the word lists into one array
const combinedWordLists = (
  lists = [
    wordList1,
    wordList2,
    wordList3,
    wordList4,
    wordList5,
    wordList6,
    wordList7,
    wordList9,
    wordList10,
    wordList11,
    wordList12,
  ]
) => {
  const combinedList = [];
  const duplicateCheck = new Set(); // to track words that have already been added

  // loop through each list and add the words to the combined list if they are not already there
  lists.forEach((list) => {
    list.forEach((item) => {
      if (!duplicateCheck.has(item)) {
        duplicateCheck.add(item);
        combinedList.push(item);
      }
    });
  });

  return combinedList;
};

// export all the word lists
export {
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
  combinedWordLists,
  listSelectOptions,
};
