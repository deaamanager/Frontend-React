"use client";
import { useEffect, useState } from "react";
import Botavatar from "../Botavatar";

const FlashCard = ({ question, answer, incrementIndex }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => setShowAnswer(false), [question]);
  return (
    <>
      <div
        className=" flex-col  flex items-center justify-center"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <button
          className={`
           ${
             showAnswer ? "py-0 px-0  " : "py-1 px-2  w-[80%] bg-amber-600/20  "
           } 
          text-center  cursor-pointer text-amber-500  flex items-center justify-center border border-amber-600 rounded-full
          `}
        >
          {!showAnswer ? (
            question
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div className=" flex items-start justify-start">
          <div
            className={`${
              showAnswer ? "block" : "hidden"
            } mt-6 flex items-center justify-center`}
          >
            <Botavatar />
          </div>
          <p
            className={`${showAnswer ? "block" : "hidden"}
        my-4  text-amber-500 bg-[#6C7A89]/40 py-4 px-2 rounded-md text-sm  w-[80%]
        `}
          >
            {showAnswer && answer}
          </p>
        </div>
      </div>
      {showAnswer && (
        <div className="flex items-center justify-center">
          <button
            className="text-center text-amber-500 rounded-full cursor-pointer bg-amber-600/20 py-1 px-2 border border-amber-600  "
            onClick={incrementIndex}
          >
            Next question
          </button>
        </div>
      )}
    </>
  );
};

export default FlashCard;
