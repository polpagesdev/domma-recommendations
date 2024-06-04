export type QuizProps = {
  questions: QuizQuestion[];
  onComplete: (answers: QuizAnswers) => void;
  name: string;
  setName: (name: string) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  answers: QuizAnswers;
  setAnswers: (answers: QuizAnswers) => void;
  email: string;
  setEmail: (email: string) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
};
