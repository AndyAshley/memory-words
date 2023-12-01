import { useState } from "react";
import "./App.css";
import { changeList } from "./utility/utility";
import { wordList1, listSelectOptions } from "./data/wordLists";

function App() {
  const [currentList, setCurrentList] = useState({
    list: wordList1,
    length: wordList1.length,
    word: wordList1[0],
    type: "word",
  });

  const handleNextWord = (input, direction) => {
    const list = input.list;
    const currentIndex = list.indexOf(input.word);
    const handleWrap = (index) => {
      if (index === list.length - 1 && direction === "next") {
        return 0;
      }
      if (index === 0 && direction === "prev") {
        return list.length - 1;
      }
      return direction === "next" ? index + 1 : index - 1;
    };

    setCurrentList({
      ...currentList,
      word: list[handleWrap(currentIndex)],
    });
  };

  const handleListChange = (e) => {
    setCurrentList(changeList(e.target.value));
  };

  return (
    <>
      <select id="selector" onChange={handleListChange}>
        {listSelectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div id="main-container">
        <button onClick={() => handleNextWord(currentList, "prev")}>
          <img
            src="/angle-right-icon.svg"
            alt="arrow-prev"
            className="arrow prev"
          />
        </button>
        <p id="word-display" data-type={`${currentList.type}`}>
          {currentList.word}
        </p>
        <button onClick={() => handleNextWord(currentList, "next")}>
          <img src="/angle-right-icon.svg" alt="arrow-next" className="arrow" />
        </button>
      </div>
      <p id="index-counter">
        {currentList.list.indexOf(currentList.word) + 1} /{" "}
        {currentList.list.length}
      </p>
    </>
  );
}

export default App;
