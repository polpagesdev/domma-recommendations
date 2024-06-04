// Type imports
import { QuizQuestion } from "../types/QuizQuestion";

type MultiSelectOptionProps = {
  question: QuizQuestion;
  onSelect: (questionId: number, type: string, option: number) => void;
  selectedOptions: number[];
};

const MultiSelectOption = (props: MultiSelectOptionProps) => {
  // Destructure the props for better readability
  const { question, onSelect, selectedOptions } = props;

  return (
    <div className="flex flex-col gap-4">
      {/* Map over each option and display a card with a checkbox button */}
      {question.options?.map((option) => (
        <label
          className="rounded bg-slate-200 hover:bg-slate-300 transition-all px-4 py-2 flex items-center justify-start cursor-pointer"
          key={option.key}
          htmlFor={`option-${option.key}`}
        >
          <input
            id={`option-${option.key}`}
            type="checkbox"
            onClick={(e: any) =>
              onSelect(question.id, question.type, option.key)
            }
            checked={
              selectedOptions ? selectedOptions.includes(option.key) : false
            }
            className="hidden peer"
          />
          <span className="w-3 h-3 inline-block mr-2 border-2 border-gray-400 rounded peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:ring-2 peer-checked:ring-blue-300 transition" />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default MultiSelectOption;
