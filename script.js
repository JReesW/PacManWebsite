for (let tab of document.getElementsByClassName('tabButton')) {
	tab.addEventListener(
		"click", 
		function(e) {
			for (let body of document.getElementsByClassName('tabBody')) {
				document.getElementById(body.id).style.display = body.id == this.value ? "initial" : "none"
			}
		}
	)
}
