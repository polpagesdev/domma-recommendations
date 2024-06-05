// Types
import { QuizQuestion } from "../types/QuizQuestion";
// Components
import MultiSelectOption from "./MultiSelectOption";
import NavButtons from "./NavButtons";
import SingleSelectOption from "./SingleSelectOption";
import TextInputOption from "./TextInputOption";

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

const Question = (props: QuestionProps) => {
  // Destructure props for better readability
  const {
    question,
    onSelect,
    selectedOptions,
    currentQuestionIndex,
    handlePrevious,
    handleNext,
    name,
    setName,
    email,
    setEmail,
    resetQuiz,
  } = props;

  const renderOptions = (question: QuizQuestion) => {
    switch (question.type) {
      case "name-input":
        return (
          <TextInputOption
            placeholder={question.inputPlaceholder!}
            value={name}
            setValue={setName}
            type="text"
          />
        );
      case "email-input":
        return (
          <TextInputOption
            placeholder={question.inputPlaceholder!}
            value={email}
            setValue={setEmail}
            type="email"
          />
        );
      case "single-select":
        return (
          <SingleSelectOption
            question={question}
            onSelect={onSelect}
            selectedOptions={selectedOptions ? selectedOptions[0] : 0}
          />
        );
      case "multi-select":
        return (
          <MultiSelectOption
            question={question}
            onSelect={onSelect}
            selectedOptions={selectedOptions}
          />
        );
      case "info":
      case "welcome":
      case "goodbye":
        return <></>;
      default:
        return <div>Unsupported question type</div>;
    }
  };

  return (
    <div className="absolute mx-auto left-0 right-0 max-w-[768px] flex flex-col items-center justify-center">
      {/* Display question title */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        {/* Add 'name' to title only in welcome and goodbye messages */}
        {question.type === "goodbye" ? <span>{name}</span> : <></>}
        {question.title}
        {question.type === "welcome" ? <span>{name}!</span> : <></>}
      </h1>
      {/* Show subtitle only if the question has one */}
      {question.subtitle !== "" ? (
        <h2 className="text-lg mb-6 text-center">{question.subtitle}</h2>
      ) : (
        <></>
      )}
      {/* Render options based on question type */}
      {renderOptions(question)}
      <NavButtons
        question={question}
        selectedOptions={selectedOptions}
        currentQuestionIndex={currentQuestionIndex}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        name={name}
        email={email}
      />
      <button
        onClick={resetQuiz}
        className="text-sm bg-transparent border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary-200 text-primary-200 mt-12"
      >
        Volver a empezar
      </button>
    </div>
  );
};

export default Question;
