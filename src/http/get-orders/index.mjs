import arc from "@architect/functions";
import document from "@architect/shared/document.mjs";

const client = await arc.tables();
const orders = client.orders;

export const handler = arc.http.async(async (request) => {
	console.log(`${request.httpMethod} ${request.path}`);

	const allOrders = await orders.scan({});

	return {
		html: document(
			/*html*/ `
<h1 class="center">🍕 tbeseda's Pizza Orders</h1>
<table>
	<thead>
		<tr>
			<th>Customer</th>
			<th colspan=2>Pie</th>
			<th>Tip 💰</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		${tableRows(allOrders.Items)}
	</tbody>
</table>
		`,
		),
	};
});

function tableRows(items) {
	return items.map(
		(o) => `
<tr>
	<td>${o.name} @ ${o.address}</td>
	<td>${o.size}</td>
	<td>${o.toppings.join(", ")}</td>
	<td>${o.tip ? o.tip / 100 : "🤬"}</td>
	<td>deliver</td>
</tr>
	`,
	).join("\n");
}
