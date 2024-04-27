module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,fonts.img,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};