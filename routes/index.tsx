import { Fragment } from "preact";
import Navigation from "../components/Navigation.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { IProduct } from "../utils/types.ts";
import ProductCard from "../islands/ProductCard.tsx";

export const handler: Handlers<IProduct[] | null> = {
  async GET(_, ctx) {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = (await res.json()) as IProduct[];
    if (!products) {
      return ctx.render(null);
    }
    return ctx.render(products);
  },
};

export default function Home({ data: products }: PageProps) {
  if (!products) return <p>No products</p>;
  return (
    <Fragment>
      <Navigation />
      <div class="p-4 mt-[50px] mx-auto max-w-screen-md">
        <div>
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
