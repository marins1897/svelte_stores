<script>
  import Product from "../Products/Product.svelte";
  import productItems from './products-store';
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
  }
</style>

<section>
  <h1>Products</h1>
  {#each $productItems as product (product.id)}
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description} />
  {/each}
</section>
