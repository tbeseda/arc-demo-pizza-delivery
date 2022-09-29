export default function (body) {
	return /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>tbeseda's Pizza Delivery</title>
	<link rel="icon" href="https://fav.farm/🍕" />
	<link rel="stylesheet" href="_static/style.css" />
</head>
<body>
	<main>${body}</main>
	<footer class="center">
		<nav>
			<a href="/">home</a> | <a href="/orders">orders</a> | <a href="/services">services</a>
		</nav>
	</footer>
</body>
</html>
  `.trim();
}
