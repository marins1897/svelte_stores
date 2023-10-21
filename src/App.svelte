<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import timer from './timer-store';

  timer.subscribe(count => {
    
  });

  let showCart = true;
</script>

<Button on:click={() => showCart = !showCart}>Show Cart</Button>

{#if showCart}
<Cart />
{/if}
<Products />
