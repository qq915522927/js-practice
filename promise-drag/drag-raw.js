(()=> {function drag(div) {

	function setPosition(target, left, top) {
		if (typeof left === "string") target.style.left = left;
		else target.style.left = left + "px";
		if (typeof top === "string") target.style.top = top;
		else target.style.top = top + "px";
	}
	function resumeEleStyle(originStyle, ele) {
		console.log(originStyle)
		ele.style.left = originStyle.left
		ele.style.top = originStyle.top
		ele.style['z-index'] = originStyle.zIndex
	}
	div.style.position = 'relative';
	let drag = false;
	let originStyle;
	let lastP = { x: 0, y: 0 };
	let currentOffset = { x: 0, y: 0 };
	div.addEventListener("mousedown", e => {
		originStyle = Object.assign({}, e.target.style)
		lastP.x = e.clientX;
		lastP.y = e.clientY;
		drag = true;
	});
	div.addEventListener("mousemove", e => {
		if (drag) {
			currentOffset.x += e.clientX - lastP.x;
			currentOffset.y += e.clientY - lastP.y;
			e.target.style.left = currentOffset.x + "px";
			e.target.style.top = currentOffset.y + "px";
			e.target.style['z-index'] = 9999;
			lastP.x = e.clientX;
			lastP.y = e.clientY;
		}
	});

	div.addEventListener("mouseup", e => {
		if (drag) {
			drag = false;
			resumeEleStyle(originStyle, e.target)
			currentOffset.x = 0;
			currentOffset.y = 0;
		}
	});
	div.addEventListener("mouseout", e => {
		if (drag) {
			drag = false;
			resumeEleStyle(originStyle, e.target)
			currentOffset.x = 0;
			currentOffset.y = 0;
		}
	});
}
window.drag = drag
})()
