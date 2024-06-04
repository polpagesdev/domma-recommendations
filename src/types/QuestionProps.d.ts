// Type imports
import { QuizAnswers } from "../types/QuizAnswers";
import { QuizQuestion } from "../types/QuizQuestion";

export type QuestionProps = {
  question: QuizQuestion;
  onSelect: (questionId: number, type: string, option: number) => void;
  selectedOptions: number[];
  currentQuestionIndex: number;
  handlePrevious: (questionId: number, options: number[]) => void;
  handleNext: (questionId: number, options: number[]) => void;
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  resetQuiz: () => void;
};
