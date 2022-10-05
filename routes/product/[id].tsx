import { Fragment } from "preact";
import Navigation from "../../components/Navigation.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { IProduct } from "../../utils/types.ts";

export const handler: Handlers<IProduct | null> = {
  async GET(_, ctx) {
    const res = await fetch(
      `https://fakestoreapi.com/products/${ctx.params.id}`,
    );
    const product = (await res.json()) as IProduct;
    if (!product) {
      return ctx.render(null);
    }
    return ctx.render(product);
  },
};

export default function Product({ data: product }: PageProps<IProduct | null>) {
  if (!product) return <p>Product not found</p>;
  return (
    <Fragment>
      <Navigation />
      <div class="p-4 mt-[50px] mx-auto max-w-screen-md">
        <div>
          <h1 className="font-bold text-2xl">{product.title}</h1>
          <img src={product.image} class="w-1/3" />
          <h2>{product.price}$</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </Fragment>
  );
}
