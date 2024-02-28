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
const wordList13 = ["her", "would", "make", "him", "into", "time"];
const wordList14 = ["has", "two", "more", "write", "go", "see"];
const wordList15 = ["number", "way", "could", "people", "than", "first"];
const sentencePractice15b = [
  "I can see a bus.",
  "The dog is black.",
  "She had size bugs.",
  "Her hat is orange.",
  "I had a map.",
];
const wordList16 = ["water", "been", "called", "who", "am", "its"];
const wordList17 = ["now", "find", "long", "down", "day", "did"];
const wordList18 = ["come", "made", "may", "part", "over", "new"];
const wordList19 = ["sound", "take", "only", "work", "know", "place"];
const wordList20 = ["years", "live", "back", "give", "most", "very"];
const wordList21 = ["after", "things", "our", "just", "name", "good"];
const wordList22 = ["sentence", "man", "think", "say", "great", "help"];

// for the select dropdown
export const listSelectOptions = [
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
  { value: "wordList13", label: "Word List 13" },
  { value: "wordList14", label: "Word List 14" },
  { value: "wordList15", label: "Word List 15" },
  { value: "sentencePractice15b", label: "Sentence Practice 15B" },
  { value: "wordList16", label: "Word List 16" },
  { value: "wordList17", label: "Word List 17" },
  { value: "wordList18", label: "Word List 18" },
  { value: "wordList19", label: "Word List 19" },
  { value: "wordList20", label: "Word List 20" },
  { value: "wordList21", label: "Word List 21" },
  { value: "wordList22", label: "Word List 22" },
  { value: "wordList1Through12", label: "Word List 1-12" },
  { value: "wordList13Plus", label: "Word List 13+" },
  { value: "allWordLists", label: "All Words" },
];

// combine input word lists into one list
const combineWordLists = (lists = []) => {
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

const wordList1Through12 = combineWordLists([
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
]);

const wordList13Plus = combineWordLists([
  wordList13,
  wordList14,
  wordList15,
  wordList16,
  wordList17,
  wordList18,
  wordList19,
  wordList20,
  wordList21,
  wordList22,
]);

const allWordLists = combineWordLists([wordList1Through12, wordList13Plus]);

export const listArray = [
  { wordList1: { list: wordList1, display: "Word List 1", type: "word" } },
  { wordList2: { list: wordList2, display: "Word List 2", type: "word" } },
  { wordList3: { list: wordList3, display: "Word List 3", type: "word" } },
  { wordList4: { list: wordList4, display: "Word List 4", type: "word" } },
  { wordList5: { list: wordList5, display: "Word List 5", type: "word" } },
  {
    sentencePractice5b: {
      list: sentencePractice5b,
      display: "Sentence Practice 5B",
      type: "sentence",
    },
  },
  { wordList6: { list: wordList6, display: "Word List 6", type: "word" } },
  { wordList7: { list: wordList7, display: "Word List 7", type: "word" } },
  {
    letterList8: { list: letterList8, display: "Letter List 8", type: "word" },
  },
  { wordList9: { list: wordList9, display: "Word List 9", type: "word" } },
  { wordList10: { list: wordList10, display: "Word List 10", type: "word" } },
  { wordList11: { list: wordList11, display: "Word List 11", type: "word" } },
  { wordList12: { list: wordList12, display: "Word List 12", type: "word" } },
  { wordList13: { list: wordList13, display: "Word List 13", type: "word" } },
  { wordList14: { list: wordList14, display: "Word List 14", type: "word" } },
  { wordList15: { list: wordList15, display: "Word List 15", type: "word" } },
  {
    sentencePractice15b: {
      list: sentencePractice15b,
      display: "Sentence Practice 15B",
      type: "sentence",
    },
  },
  { wordList16: { list: wordList16, display: "Word List 16", type: "word" } },
  { wordList17: { list: wordList17, display: "Word List 17", type: "word" } },
  { wordList18: { list: wordList18, display: "Word List 18", type: "word" } },
  { wordList19: { list: wordList19, display: "Word List 19", type: "word" } },
  { wordList20: { list: wordList20, display: "Word List 20", type: "word" } },
  { wordList21: { list: wordList21, display: "Word List 21", type: "word" } },
  { wordList22: { list: wordList22, display: "Word List 22", type: "word" } },
  {
    wordList1Through12: {
      list: wordList1Through12,
      display: "Word List 1-12",
      type: "word",
    },
  },
  {
    wordList13Plus: {
      list: wordList13Plus,
      display: "Word List 13+",
      type: "word",
    },
  },
  { allWordLists: { list: allWordLists, display: "All Words", type: "word" } },
];
