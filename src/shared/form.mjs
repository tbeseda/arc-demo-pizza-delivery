export default function () {
	return /*html*/ `
<form action="/orders" method="POST">
	<fieldset>
		<legend>Customer Info</legend>
		<p>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required />
		</p>
		<p>
			<label for="address">Address:</label>
			<input type="text" id="address" name="address" required />
		</p>
	</fieldset>
	<fieldset>
		<legend>Pie Size</legend>
		<p>
			<input type="radio" name="size" id="size_1" value="small" required />
			<label for="size_1">Small</label>
		</p>
		<p>
			<input type="radio" name="size" id="size_2" value="medium" />
			<label for="size_2">Medium</label>
		</p>
		<p>
			<input type="radio" name="size" id="size_3" value="large" />
			<label for="size_3">Large</label>
		</p>
	</fieldset>
	<fieldset>
		<legend>Toppings!</legend>
		<label>Choose one or more <small>(cmd + click)</small>:</label>
		<br />
		<select name="toppings" multiple size="13">
			<optgroup label="S-Tier toppings">
				<option value="pep">Pepperoni</option>
				<option value="jal">Jalapenos</option>
				<option value="oliv" disabled>Green olives</option>
			</optgroup>
			<optgroup label="Quality toppings">
				<option value="pine">Pineapple</option>
				<option value="feta">Feta cheese</option>
				<option value="bell">Bell pepper</option>
			</optgroup>
			<optgroup label="Mid toppings">
				<option value="saus">Italian Sausage</option>
				<option value="ham" disabled>Ham</option>
				<option value="spin">Spinach</option>
			</optgroup>
			<option value="dealer">Dealer's choice (sign the waiver, plz) 🎲</option>
		</select>
	</fieldset>
	<button type="submit">Place My Order</button>
	<input type="number" id="tip" name="tip" placeholder="💰 Tip (in dollars)" />
</form>
  `;
}
