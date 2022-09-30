import arc from "@architect/functions";

export const handler = arc.events.subscribe(async (newOrder) => {
	console.log(`New order! <${newOrder.orderID}>`);
	return;
});
