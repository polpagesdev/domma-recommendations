// React imports
import { useState } from "react";
// Component imports
import Question from "./Question";
// Type imports
import { QuizQuestion } from "../types/QuizQuestion";
import { QuizAnswers } from "../types/QuizAnswers";

type QuizProps = {
  questions: QuizQuestion[];
  onComplete: (answers: QuizAnswers) => void;
  name: string;
  setName: (name: string) => void;
};

const Quiz = (props: QuizProps) => {
  // Destructure the props for better readability
  const { questions, onComplete, name, setName } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [email, setEmail] = useState<string>("");

  // Set the current question index with debounce to avoid flickering
  const setDebouncedIndex = (index: number) => {
    setTimeout(() => {
      setCurrentQuestionIndex(index);
    }, 100);
  };

  const handleNext = (questionId: number, options: number[]) => {
    // Handle completion of the quiz
    if (questionId === questions.length - 1) {
      onComplete(answers);
      return;
    }
    // Q2: If the user has regular menstruation, skip to Q7
    if (questionId === 2 && options[0] === 4) {
      setDebouncedIndex(7);
      return;
    }
    // Q3: Show info msg depending on the user's answer and skip to Q7
    if (questionId === 3 && options[0] === 2) {
      setDebouncedIndex(5);
      return;
    }
    if (questionId === 3 && [3, 4].includes(options[0])) {
      setDebouncedIndex(6);
      return;
    }
    if ([4, 5, 6].includes(questionId)) {
      setDebouncedIndex(7);
      return;
    }
    // Q7: If the user has not selected "Sofocos && Cansancio && Problemas de sueño" skip to Q10
    if (
      questionId === 7 &&
      answers[7] &&
      !answers[7].includes(1) &&
      !answers[7].includes(2) &&
      !answers[7].includes(3)
    ) {
      setDebouncedIndex(10);
      return;
    }
    // Q7: If the user selects "Cansancio || Problemas de sueño" and not "Sofocos" skip to Q9
    if (
      questionId === 7 &&
      answers[7] &&
      (answers[7].includes(2) || answers[7].includes(3)) &&
      !answers[7].includes(1)
    ) {
      setDebouncedIndex(9);
      return;
    }
    // Q8: If the user has selected only "Sofocos" skip to Q10
    if (
      questionId === 8 &&
      answers[7] &&
      !answers[7].includes(2) &&
      !answers[7].includes(3)
    ) {
      setDebouncedIndex(10);
      return;
    }
    // Q10: If the user has not selected "Sofocos" delete "answers[8]" in case it exists
    if (questionId === 10 && !answers[7]?.includes(1)) {
      delete answers[8];
    }
    // Q10: If the user has not selected "Cansancio || Problemas de sueño" delete "answers[9]" in case it exists
    if (
      questionId === 10 &&
      !answers[7]?.includes(2) &&
      !answers[7]?.includes(3)
    ) {
      delete answers[9];
    }
    // Default flow
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handlePrevious = (questionId: number, options: number[]) => {
    // Prevent going back from the first question
    if (currentQuestionIndex <= 0) {
      return;
    }
    // Q7: If the user has regular menstruation, go back to Q2
    if (questionId === 7 && answers[2][0] === 4) {
      setDebouncedIndex(2);
      return;
    }
    // Q4, Q5, Q6, Q7: Always go back to Q3
    if ([4, 5, 6, 7].includes(questionId)) {
      setDebouncedIndex(3);
      return;
    }
    // Q9: If the user has selected "Cansancio || Problemas de sueño" and not "Sofocos" go back to Q7
    if (
      questionId === 9 &&
      answers[7] &&
      (answers[7].includes(2) || answers[7].includes(3)) &&
      !answers[7].includes(1)
    ) {
      setDebouncedIndex(7);
      return;
    }
    // Q10: If the user has selected only "Sofocos" go back to Q8
    if (
      questionId === 10 &&
      answers[7] &&
      answers[7].includes(1) &&
      !answers[7].includes(2) &&
      !answers[7].includes(3)
    ) {
      setDebouncedIndex(8);
      return;
    }
    // Q10: If the user has not selected "Sofocos && Cansancio && Problemas de sueño" go back to Q7
    if (
      questionId === 10 &&
      answers[7] &&
      !answers[7].includes(1) &&
      !answers[7].includes(2) &&
      !answers[7].includes(3)
    ) {
      setDebouncedIndex(7);
      return;
    }
    // Default flow
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  const onSelect = (questionId: number, type: string, option: number) => {
    // Add the option directly as a new array if it's a single-select question
    if (type === "single-select") {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: [Number(option)],
      }));
      handleNext(questionId, [option]);
    }
    // Add or remove the option from the array if it's a multi-select question
    if (type === "multi-select") {
      if (answers[questionId] && answers[questionId].length > 0) {
        const newOptions = answers[questionId].includes(option)
          ? answers[questionId].filter((item) => item !== option)
          : [...answers[questionId], option];
        setAnswers((prev) => ({
          ...prev,
          [questionId]: newOptions,
        }));
      } else {
        setAnswers((prev) => ({
          ...prev,
          [questionId]: [
            ...((prev[questionId] as number[]) || []),
            Number(option),
          ],
        }));
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Question
        key={currentQuestionIndex}
        question={questions[currentQuestionIndex]}
        onSelect={onSelect}
        selectedOptions={answers[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
};

export default Quiz;
