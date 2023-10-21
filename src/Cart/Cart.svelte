<script>
  import CartItem from "./CartItem.svelte";
  import cartItems from './cart-store';
/*
  import { onDestroy } from "svelte";

  let items; 

  const unsubscribe = cartItems.subscribe(storeItems => {
    items = storeItems;
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    };
  });
*/
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<section>
  <h1>Cart</h1>
  <ul>
    {#each $cartItems as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>
>
