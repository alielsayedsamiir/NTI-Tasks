function processCheckout(customerName, productCategory, productPrice, quantity, couponCode, paymentMethod) {

    let subtotal = productPrice * quantity;

    let categoryDiscountRate = 0;

    if (productCategory === "Electronics") {
        categoryDiscountRate = 0.05;
    } else if (productCategory === "Clothing") {
        categoryDiscountRate = 0.10;
    } else if (productCategory === "Groceries") {
        categoryDiscountRate = 0.02;
    } else {
        categoryDiscountRate = 0;
    }

    let categoryDiscount = subtotal * categoryDiscountRate;

    let couponDiscount = 0;
    let isCouponValid = false;

    if (couponCode === "SAVE10") {
        couponDiscount = subtotal * 0.10;
        isCouponValid = true;
    } else if (couponCode === "SAVE20") {
        couponDiscount = subtotal * 0.20;
        isCouponValid = true;
    } else if (couponCode === "SUPER100") {
        couponDiscount = subtotal * 1.00;
        isCouponValid = true;
    } else {
        couponDiscount = 0;
        isCouponValid = false;
    }

    let paymentDiscountRate = 0;

    if (paymentMethod === "Credit Card") {
        paymentDiscountRate = 0.03;
    } else if (paymentMethod === "Wallet") {
        paymentDiscountRate = 0.05;
    } else {
        paymentDiscountRate = 0;
    }

    let combinedProductDiscount = categoryDiscount + couponDiscount;

    if (combinedProductDiscount > subtotal) {
        combinedProductDiscount = subtotal;
    }

    let afterProductDiscounts = subtotal - combinedProductDiscount;
    let paymentDiscount = afterProductDiscounts * paymentDiscountRate;

    let afterAllDiscounts = afterProductDiscounts - paymentDiscount;

    let vatRate = 0.14;
    let vatAmount = afterAllDiscounts * vatRate;

    let finalPrice = afterAllDiscounts + vatAmount;

    if (finalPrice < 0) {
        finalPrice = 0;
    }

    console.log("---------- INVOICE ----------");
    console.log("Customer Name: " + customerName);
    console.log("Product Category: " + productCategory);
    console.log("Product Price: " + productPrice);
    console.log("Quantity: " + quantity);
    console.log("Subtotal: " + subtotal);
    console.log("Category Discount: -" + categoryDiscount);
    console.log("Coupon Code: " + couponCode + " (" + (isCouponValid ? "Valid" : "Invalid") + ")");
    console.log("Coupon Discount: -" + couponDiscount);
    console.log("Payment Method: " + paymentMethod);
    console.log("Payment Discount: -" + paymentDiscount);
    console.log("VAT (" + (vatRate * 100) + "%): +" + vatAmount);
    console.log("Final Total: " + finalPrice);
    console.log("------------------------------");
}

processCheckout("Ahmed", "Electronics", 200, 3, "SAVE10", "Credit Card");
processCheckout("Mona", "Clothing", 50, 2, "SAVE20", "Wallet");
processCheckout("Khaled", "Books", 100, 1, "INVALIDCODE", "Cash");

console.log("---- Bonus: final price cannot go negative ----");
processCheckout("Test User", "Clothing", 20, 1, "SUPER100", "Wallet");
