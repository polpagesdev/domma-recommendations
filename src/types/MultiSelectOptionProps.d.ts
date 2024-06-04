export type MultiSelectOptionProps = {
  question: QuizQuestion;
  onSelect: (questionId: number, type: string, option: number) => void;
  selectedOptions: number[];
};
