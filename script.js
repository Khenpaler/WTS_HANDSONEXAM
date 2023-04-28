let quantity = 1;
let qty = 1;
let stocks = 9;
let subtotal = 500;
let fee = 50;
let total = 550;
let checkQty = 0;
let checkTotal = 0;

    function addQuantity() {
        
        quantity = quantity + 1;
        stocks = stocks - 1;
        qty = qty + 1;
        subtotal = subtotal + 500;
        total = fee + subtotal;

        document.getElementById('quantity').innerHTML = quantity;
        document.getElementById('stocks').innerHTML = stocks;
        document.getElementById('qty').innerHTML = qty;
        document.getElementById('subtotal').innerHTML = "P" + subtotal;
        document.getElementById('total').innerHTML = "P" + total;

        if (quantity == 11 || stocks == -1) {
            alert('Exceed to the stock of the item!');
            quantity = 10;
            stocks = 0;
            qty = 10;
            subtotal = 5000;
            total = 5050;

            document.getElementById('quantity').innerHTML = quantity;
            document.getElementById('stocks').innerHTML = stocks;
            document.getElementById('qty').innerHTML = qty;
            document.getElementById('subtotal').innerHTML = "P" + subtotal;
            document.getElementById('total').innerHTML = "P" + total;
        }
    }


    function subQuantity() {
        
        quantity = quantity - 1;
        stocks = stocks + 1;
        qty = qty - 1;
        subtotal = subtotal - 500;
        total = total - 500;
        
        document.getElementById('quantity').innerHTML = quantity;
        document.getElementById('stocks').innerHTML = stocks;
        document.getElementById('qty').innerHTML = qty;
        document.getElementById('subtotal').innerHTML = "P" + subtotal;
        document.getElementById('total').innerHTML = "P" + total;


        if (quantity <= 0 || stocks == 10) {
            alert('Negative, please proceed to add quantity!');
            quantity = 1;
            stocks = 9;
            qty = 1;
            subtotal = 500;
            total = 550;

            document.getElementById('quantity').innerHTML = quantity;
            document.getElementById('stocks').innerHTML = stocks;
            document.getElementById('qty').innerHTML = qty;
            document.getElementById('subtotal').innerHTML = "P" + subtotal;
            document.getElementById('total').innerHTML = "P" + total;
        }
    }


    function receipt() {
        checkQty = checkQty + qty;
        checkTotal = checkTotal + total;

        document.getElementById('check-qty').innerHTML = checkQty;
        document.getElementById('check-total').innerHTML = checkTotal;
        document.getElementById('checkout_page').style.display = "None";
        document.getElementById('receipt_page').style.display = "";

    
    }


    



