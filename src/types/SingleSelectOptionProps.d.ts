export type SingleSelectOptionProps = {
  question: QuizQuestion;
  onSelect: (questionId: number, type: string, option: number) => void;
  selectedOptions: number;
};
