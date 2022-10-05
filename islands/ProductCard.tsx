import { Fragment } from "preact";
import { IProduct } from "../utils/types.ts";
import Navigation from "../components/Navigation.tsx";
import { useState } from "preact/hooks";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [details, setDetails] = useState(false);

  const clickHandler = () => {
    setDetails(!details);
  };

  return (
    <Fragment>
      <Navigation />
      <div class="border rounded px-4 py-2 mb-2 flex flex-col justify-center items-center">
        <img src={product.image} class="w-1/6" />
        <h2 class="font-bold text-lg">{product.title}</h2>
        <p className="font-bold">{product.price}</p>
        <a href={`/product/${product.id}`}>Description</a>
        {details && <p>{product.description}</p>}
        <button
          onClick={clickHandler}
          class="rounded border py-2 px-4 bg-red-400"
        >
          Toggle description
        </button>
      </div>
    </Fragment>
  );
}
