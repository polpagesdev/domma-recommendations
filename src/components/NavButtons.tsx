// Type imports
import { NavButtonsProps } from "../types/NavButtonProps";

const NavButtons = (props: NavButtonsProps) => {
  // Destructure the props for better readability
  const {
    question,
    selectedOptions,
    currentQuestionIndex,
    handleNext,
    handlePrevious,
    name,
    email,
  } = props;

  const isDisabled = () => {
    // For the first question, check if the name is set.
    if (question.type === "name-input") {
      return name === "";
    }
    // For the final question, check if the email is set.
    if (question.type === "email-input") {
      return email === "";
    }
    // For the welcome, goodbye, and info questions, always return false.
    if (
      question.type === "goodbye" ||
      question.type === "welcome" ||
      question.type === "info"
    ) {
      return false;
    }
    // For all other questions, check if an option is selected or if the question hasn't been answered yet.
    return !Array.isArray(selectedOptions) || selectedOptions.length === 0;
  };

  return (
    <div className="mt-8">
      {currentQuestionIndex > 0 && (
        <button
          onClick={() => handlePrevious(question.id, selectedOptions)}
          className="px-6 py-2 bg-white border border-primary-400 hover:bg-[#f9f3f3] text-primary-400 font-semibold rounded-full transition-all duration-300 mr-4"
        >
          anterior
        </button>
      )}
      <button
        onClick={() => handleNext(question.id, selectedOptions)}
        className="px-6 py-2 bg-primary-400 hover:bg-primary-200 text-white font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-400"
        disabled={isDisabled()}
      >
        siguiente
      </button>
    </div>
  );
};

export default NavButtons;
