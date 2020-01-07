(function() {
	const components = [
		document.querySelector("#data"),
		document.querySelector("#nome"),
		document.querySelector("#numero")
	];

	const submit = document.querySelector(".form");

	submit.addEventListener("submit", function(event) {
		event.preventDefault();

		const tr = document.createElement('tr');
		const body = document.querySelector('tbody');
		components.forEach((a) => {

			const td = document.createElement('td');
			td.textContent = a.value;
			tr.appendChild(td);
			body.appendChild(tr);
		
		});

		components[0].value = 0;
		components[1].value = '';
		components[2].value = '';

		components[0].focus();
	});

})();