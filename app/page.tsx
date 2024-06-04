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
  const [completed, setCompleted] = useState<boolean>(false);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [name, setName] = useState<string>("");

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

  // If the quiz is completed, display the recommended products
  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute mx-auto left-0 right-0 max-w-[768px] flex flex-col items-center justify-center">
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
          <div className="flex flex-row items-center justify-center gap-6 p-4">
            {/* Map over the recommended products and display them */}
            {recommendedProducts.map((product: Product, index: number) => (
              <ProductCard product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // If the quiz is not completed (by default), display the quiz
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Quiz
        questions={quizQuestions}
        onComplete={handleComplete}
        name={name}
        setName={setName}
      />
    </div>
  );
}
