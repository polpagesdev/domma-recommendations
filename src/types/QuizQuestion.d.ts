export type QuizQuestion = {
  id: number;
  title: string;
  subtitle?: string | JSX.Element;
  type:
    | "single-select"
    | "multi-select"
    | "name-input"
    | "email-input"
    | "welcome"
    | "goodbye"
    | "info";
  options?: {
    key: number;
    label: string;
  }[];
  inputPlaceholder?: string;
};
