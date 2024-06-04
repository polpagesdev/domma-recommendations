// Type imports
import { TextInputOptionProps } from "../types/TextInputOptionProps";

const TextInputOption = (props: TextInputOptionProps) => {
  // Destructure the props for better readability
  const { placeholder, value, setValue, type } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-[550px] w-[550px] border-b-[1px] border-primary-400 py-2 bg-transparent focus:outline-none focus:border-b-[1px] focus:border-transparent placeholder:text-primary-200 text-primary-200"
    />
  );
};

export default TextInputOption;
