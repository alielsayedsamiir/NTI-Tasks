function processOrders(orders) {
    let totalRevenue = 0;
    let successfulOrders = 0;
    let processedOrders = 0;
    let stopMessage = "";

    let consecutiveSkips = 0;
    let stockFailures = 0;

    for (let order of orders) {

        let isSkipped = (order.status === "cancelled" || order.status === "invalid" || !order.stockAvailable);

        if (isSkipped) {
            consecutiveSkips++;

            if (!order.stockAvailable) {
                stockFailures++;
            }

            if (consecutiveSkips >= 3 || stockFailures >= 3) {
                stopMessage = "System stopped due to critical failure";
                break;
            }

            continue;
        }

        consecutiveSkips = 0;
        totalRevenue += order.amount;
        successfulOrders++;
        processedOrders++;
    }

    console.log("Total Revenue:", totalRevenue);
    console.log("Successful Orders:", successfulOrders);
    console.log("Processed Orders Count:", processedOrders);

    if (stopMessage !== "") {
        console.log(stopMessage);
    }
}

processOrders([
    { id: 1, status: "valid", stockAvailable: true, amount: 100 },
    { id: 2, status: "cancelled", stockAvailable: true, amount: 50 },
    { id: 3, status: "valid", stockAvailable: true, amount: 200 },
    { id: 4, status: "invalid", stockAvailable: true, amount: 30 }
]);

console.log("----------------------");

processOrders([
    { id: 1, status: "valid", stockAvailable: true, amount: 100 },
    { id: 2, status: "cancelled", stockAvailable: true, amount: 50 },
    { id: 3, status: "invalid", stockAvailable: true, amount: 60 },
    { id: 4, status: "valid", stockAvailable: false, amount: 70 },
    { id: 5, status: "valid", stockAvailable: true, amount: 999 }
]);

console.log("----------------------");

processOrders([
    { id: 1, status: "valid", stockAvailable: false, amount: 100 },
    { id: 2, status: "valid", stockAvailable: false, amount: 200 },
    { id: 3, status: "valid", stockAvailable: false, amount: 300 },
    { id: 4, status: "valid", stockAvailable: true, amount: 400 }
]);
