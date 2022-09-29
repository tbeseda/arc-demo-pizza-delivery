import arc from "@architect/functions";

export const handler = arc.http.async(async (request) => {
	console.log(`${request.httpMethod} ${request.path}`);

	return {
		json: { services: await arc.services() },
	};
});
