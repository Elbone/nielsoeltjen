if (document.addEventListener) {
	// DOM ready
	document.addEventListener('DOMContentLoaded', function() {
		window.onresize();
	});
	// Do the layout
	window.onresize = function (event) {
		var Wrap = document.getElementById("items");
		var Items = Wrap.querySelectorAll('span');
		[].forEach.call(Items, function (Element, Index){
			var TopBottom = Math.random() < 0.5 ? 'top' : 'bottom';
			var LeftRight = Math.random() < 0.5 ? 'left' : 'right';
			var Min = 0;
			var Max = 50;
			var VertPos = Math.floor(Math.random() * (Max - Min + 1)) + Min;
			var HorPos = Math.floor(Math.random() * (Max - Min + 1)) + Min;
			Element.style.top = 'auto';
			Element.style.bottom = 'auto';
			Element.style.left = 'auto';
			Element.style.top = 'auto';
			Element.style[TopBottom] = VertPos+'%';
			Element.style[LeftRight] = HorPos+'%';
		});
	}
};

document.addEventListener('DOMContentLoaded', function() {
	var Add = 'niels#nielsoeltjen+com'.replace('#', '@').replace('+', '.');
	var MailTo = 'mailto:' + Add;
	var El = document.getElementById('link-email');
	El.setAttribute('href', MailTo);
	El.setAttribute('target', '');
});
