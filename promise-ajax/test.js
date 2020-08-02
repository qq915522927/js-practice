function print(msg) {
	console.log(msg);
	div = document.createElement("div");
	div.textContent = "" + msg;
	document.body.appendChild(div);
}

httpGet = function(url) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.addEventListener("loadend", resp =>
			resolve(resp.currentTarget.responseText)
		);
		req.open("GET", url);
		req.send();
	});
};

window.onload = () => {
	httpGet("http://localhost:5500")
		.then(resp => {
			print(resp);
			return httpGet("http://localhost:5500/test.js");
		})
		.then(resp => print(resp));
	print("end");
};
