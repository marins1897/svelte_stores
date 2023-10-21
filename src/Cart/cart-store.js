import { writable } from "svelte/store";

// pass default values to cart store as writable arguments
const cart  = writable([
    {
        id: "p3",
        title: "PC",
        price: 1099.99
      },
      {
        id: "p4",
        title: "Bike",
        price: 599.99
      }
]);

const customCartStore = {
    subscribe : cart.subscribe,
    addItem: (item) => {
        cart.update((items) => {
            if (items.find(i => i.id === item.id)) {
                return [...items];
            }
            return [...items, item];
        });
    },
    removeItem: (id) => {
        cart.update(items => {
            return items.filter(i => i.id !== id);
        });
    }
};

export default customCartStore;