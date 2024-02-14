import { useState } from "react";
import { changeList } from "../utility/utility";
import { wordList1, listSelectOptions } from "../data/wordLists";

const Words = () => {
  const [currentList, setCurrentList] = useState({
    list: wordList1,
    length: wordList1.length,
    word: wordList1[0],
    type: "word",
    display: "Word List 1",
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
      console.log(direction === "next" ? index + 1 : index - 1);
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
    <div id="word_container">
      <select id="selector" onChange={handleListChange}>
        {listSelectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => handleNextWord(currentList, "prev")}
        className="arrow prev"
      >
        <img src="/angle-left-icon.png" alt="arrow-prev" />
      </button>
      <p id="word-display" data-type={`${currentList.type}`}>
        {currentList.word}
      </p>
      <button
        onClick={() => handleNextWord(currentList, "next")}
        className="arrow next"
      >
        <img src="/angle-right-icon.png" alt="arrow-next" className="arrow" />
      </button>
      <p id="index-counter">
        {currentList.display} - [
        {currentList.list.indexOf(currentList.word) + 1} /{" "}
        {currentList.list.length}]
      </p>
    </div>
  );
};

export default Words;
