// Next imports
import Image from "next/image";
// Component imports
import { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
  index: number;
};

const ProductCard = (props: ProductCardProps) => {
  // Destructure the props for better readability
  const { product, index } = props;

  return (
    <div
      key={index}
      className="flex flex-col bg-white rounded-lg shadow-md p-4 w-64 min-h-[620px] justify-between items-center"
    >
      <div>
        <Image
          src={product.image}
          alt={product.name}
          className="mb-5 self-start"
          width={226}
          height={226}
          quality={100}
        />
        <h3 className="text-base font-bold p-6 text-center self-start">
          {product.name}
        </h3>
        <p className="text-sm text-center mb-4 self-start">
          {product.description}
        </p>
      </div>
      <div>
        <p className="text-primary-400 text-lg font-bold text-center mb-2">
          {product.price}.00 EUR
        </p>
        <button className="bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-200 transition-all">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
