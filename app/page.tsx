"use client";

// React imports
import { useState } from "react";
// Component imports
import Quiz from "@/src/components/Quiz";
import ProductCard from "@/src/components/ProductCard";
// Utility imports
import { quizQuestions } from "@/src/utils/questions";
// Type imports
import { QuizAnswers } from "@/src/types/QuizAnswers";
import { Product } from "@/src/types/Product";

export default function Home() {
  // Global state variables
  const [completed, setCompleted] = useState<boolean>(false);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Default handler functions to move to the next or previous question
  const nextQuestion = () => {
    setCurrentQuestionIndex((prev: number) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prev: number) => prev - 1);
  };

  /**
   * This function is called when the user completes the quiz.
   * It sends the answers to the server and receives the recommended products.
   *
   * @param answers The answers provided by the user in the quiz
   */
  const handleComplete = async (answers: QuizAnswers) => {
    const response = await fetch("/api/recommendations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    });
    const data = await response.json();
    setRecommendedProducts(data.products);
    setCompleted(true);
  };

  const resetQuiz = () => {
    setCompleted(false);
    setRecommendedProducts([]);
    setName("");
    setEmail("");
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  // If the quiz is completed, display the recommended products
  if (completed) {
    return (
      <div className="flex flex-col mt-8 sm:mt-16 md:m-0 px-4 items-center justify-center h-auto md:h-screen">
        <div className="max-w-[768px] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center">
            {name}, aquí tienes un plan infalible para dominar tus síntomas,
            recomendado por nuestra especialista Belén👩‍⚕️
          </h1>
          <h2 className="text-lg mb-6 text-center">
            La efectividad de este tratamiento está científicamente probada tras
            el uso constante durante 3 meses.
            <br />
            <span className="italic">
              Prueba tu plan ahora con un 10% de DTO con el código:{" "}
              <span className="font-semibold">TUPLAN10</span>
            </span>
            <br />
            <br />
            <span className="text-base">
              Este es el tratamiento principal más específico para los síntomas
              indicados.
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4">
            {/* Map over the recommended products and display them */}
            {recommendedProducts.map((product: Product, index: number) => (
              <ProductCard product={product} index={index} key={index} />
            ))}
          </div>
        </div>
        <button
          onClick={resetQuiz}
          className="text-sm bg-transparent border-b-[1px] border-transparent hover:border-b-[1px] hover:border-primary-200 text-primary-200 mt-12 mb-8"
        >
          Volver a empezar
        </button>
      </div>
    );
  }

  // If the quiz is not completed (by default), display the quiz
  return (
    <div className="flex flex-col items-center justify-center mt-8 sm:mt-16 md:m-0 h-screen">
      <Quiz
        questions={quizQuestions}
        onComplete={handleComplete}
        name={name}
        setName={setName}
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        answers={answers}
        setAnswers={setAnswers}
        email={email}
        setEmail={setEmail}
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
        resetQuiz={resetQuiz}
      />
    </div>
  );
}
