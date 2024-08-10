function updateTotal() {
    const price = 59.99;  // Base price of the product
    const quantity = document.getElementById('quantity').value;
    const totalPrice = price * quantity;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
});
