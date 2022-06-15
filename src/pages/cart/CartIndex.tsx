import { ProductReview } from './ProductReview/ProductReview';

export function Cart() {
  return <>

    <main>

      <h1>Minha sacola</h1> 
      <section className="review">
        <ProductReview/>
      </section>

    </main>

  </>;
}