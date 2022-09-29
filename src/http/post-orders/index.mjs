import arc from "@architect/functions";
import document from "@architect/shared/document.mjs";

const client = await arc.tables();
const orders = client.orders;

export const handler = arc.http.async(async (request) => {
	console.log(`${request.httpMethod} ${request.path}`);
	const newOrder = request.body;
	newOrder.orderID = Date.now();

	if (newOrder.toppings && !Array.isArray(newOrder.toppings)) {
		newOrder.toppings = [newOrder.toppings];
	}

	if (newOrder.tip) {
		newOrder.tip = Number.parseInt(newOrder.tip) * 100;
	} else {
		newOrder.tip = 0;
	}

	const savedOrder = await orders.put(newOrder);

	console.log(
		`Order <${savedOrder.orderID}> saved`,
		JSON.stringify(savedOrder, null, 2),
	);

	return {
		html: document(
			/*html*/ `
<h1 class="center">🍕 tbeseda's Pizza Delivery</h1>
<p class="center">
	Thanks for your order!<br>
	We'll start working on your
	${savedOrder.size}
	${savedOrder.toppings ? `${savedOrder.toppings.length}-topping` : ""}
	pizza... eventually.
</p>`,
		),
	};
});
