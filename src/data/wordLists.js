// Word lists based on my sons take home sight word lists
// wordList1-12 are the first 12 lists
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

// start of word list 13+
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
  { value: "wordList13", label: "Word List 13" },
  { value: "wordList14", label: "Word List 14" },
  { value: "wordList15", label: "Word List 15" },
  { value: "sentencePractice15b", label: "Sentence Practice 15B" },
  { value: "wordList16", label: "Word List 16" },
  { value: "wordList17", label: "Word List 17" },
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
]);

const allWordLists = combineWordLists([wordList1Through12, wordList13Plus]);

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
  wordList13,
  wordList14,
  wordList15,
  sentencePractice15b,
  wordList16,
  wordList17,
  wordList1Through12,
  wordList13Plus,
  allWordLists,
  listSelectOptions,
};
