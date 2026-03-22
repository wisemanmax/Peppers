// Quantity Controls
function increaseQuantity() {
    const quantityEl = document.getElementById('quantity');
    let current = parseInt(quantityEl.textContent);
    quantityEl.textContent = current + 5;
}

function decreaseQuantity() {
    const quantityEl = document.getElementById('quantity');
    let current = parseInt(quantityEl.textContent);
    if (current > 5) {
        quantityEl.textContent = current - 5;
    }
}

// Unit Selection
document.querySelectorAll('.unit-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.unit-option').forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        this.querySelector('input[type="radio"]').checked = true;

        const value = this.querySelector('input').value;
        const quantityEl = document.getElementById('quantity');
        if (value === 'sample') quantityEl.textContent = '10';
        else if (value === 'standard') quantityEl.textContent = '50';
        else if (value === 'bulk') quantityEl.textContent = '100';
    });
});

// Checkout - reads product name from data attribute
function initiateCheckout() {
    const productName = document.querySelector('[data-product]').dataset.product;
    const quantity = document.getElementById('quantity').textContent;
    const unit = document.querySelector('.unit-option.active .unit-name').textContent;
    const subject = encodeURIComponent(productName + ' - Order Inquiry');
    const body = encodeURIComponent(
        'Hi Delaware Pepper Co,\n\n' +
        'I\'m interested in ordering ' + productName + ' pepper flakes.\n\n' +
        'Details:\n' +
        '- Product: ' + productName + '\n' +
        '- Package: ' + unit + '\n' +
        '- Quantity: ' + quantity + 'g\n\n' +
        'Please send me pricing and availability information.\n\n' +
        'Thank you!'
    );

    window.location.href = 'mailto:Htam@delawarepepperco.com?subject=' + subject + '&body=' + body;
}
