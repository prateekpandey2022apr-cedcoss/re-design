export function CartTotal(cart) {
  return cart.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);
}

export function getCartQuantity(cart, productId) {
  // debugger;
  if (!cart.length) {
    return 0;
  }
  // debugger;
  return cart.find((_item) => _item.id === productId)?.["quantity"] ?? 0;
}
