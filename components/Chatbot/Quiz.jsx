"use client";
import { useState } from "react";
import FlashCard from "./FlashCard";
import Botavatar from "../Botavatar";
import Contact from "./Contact";
const Quiz = (props) => {
  let [questionIndex, setQuestionIndex] = useState(0);

  const incrementIndex = () => setQuestionIndex((prev) => (prev += 1));
  const currentQuestion = props.questions[questionIndex];
  if (!currentQuestion) {
    return (
      <div className="flex justify-start items-start w-full  relative">
        <div className="mt-6 flex items-center justify-center  md:mr-3">
          <Botavatar />
        </div>
        <div className="bg-[#6C7A89]/40 py-4 rounded-md w-[90%] mt-4">
          <Contact />
        </div>
      </div>
    );
  }
  return (
    <FlashCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
      incrementIndex={incrementIndex}
    />
  );
};

export default Quiz;
