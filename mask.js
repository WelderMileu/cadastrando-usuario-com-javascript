(function(){
	
	const mask = {
		phone(value){
			return value
				.replace(/\D/g,'')
				.replace(/(\d{2})(\d)/,'($1) $2')
				.replace(/(\d{4})(\d)/,'$1-$2')
				.replace(/(-\d{4})\d+?$/,'$1')
		}
	}

	document.querySelector("#numero").addEventListener('input',(e) => {		
		const valor = e.target.value;
		console.log(valor);
		e.target.value = mask.phone(e.target.value);

	}, false)

})();