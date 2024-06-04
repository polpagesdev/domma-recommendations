export type NavButtonsProps = {
  question: QuizQuestion;
  selectedOptions: number[];
  currentQuestionIndex: number;
  handleNext: (questionId: number, options: number[]) => void;
  handlePrevious: (questionId: number, options: number[]) => void;
  name: string;
  email: string;
};
