import arc from "@architect/functions";
import document from "@architect/shared/document.mjs";
import form from "@architect/shared/form.mjs";

export const handler = arc.http.async(async (request) => {
	console.log(`${request.httpMethod} ${request.path}`);

	return {
		html: document(
			/*html*/ `
<h1 class="center">🍕 tbeseda's Pizza Delivery</h1>
<p class="center">Place an order for a pizza pie!</p>
${form()}`,
		),
	};
});
