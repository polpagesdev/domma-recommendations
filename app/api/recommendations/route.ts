// Next imports
import { NextRequest } from "next/server";
// Type imports
import { Product } from "@/src/types/Product";
// Utility imports
import { products } from "@/src/utils/products";

export async function POST(request: NextRequest) {
  // We would normally get the answers from the request body:
  // const answers = await request.json();
  /**
   * Here, you would call an external API or query a database to get the recommendations based on the answers.
   * For the sake of this technical test, we'll generate some recommendations using a placeholder function.
   */
  const products = generateRecommendations();
  // Return the recommendations as a JSON response
  return new Response(JSON.stringify({ products }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

/**
 * This function generates 2 recommended products randomly.
 *
 * @param answers The answers provided by the user in the quiz
 * @returns An array of recommended products
 */
const generateRecommendations = () => {
  let selectedItems: Product[] = [];
  let usedIndices = new Set();

  while (selectedItems.length < 2) {
    let randomIndex = Math.floor(Math.random() * products.length);
    if (!usedIndices.has(randomIndex)) {
      selectedItems.push(products[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return selectedItems;
};
