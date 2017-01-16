// Make console.log safe
if (typeof console === "undefined" || typeof console.log === "undefined") console = {};

// Webfonts
WebFontConfig = {google: { families: ['Fira+Mono::latin']}};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();