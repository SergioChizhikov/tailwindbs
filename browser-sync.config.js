module.exports = {
	//proxy: "localhost:10010/",
	notify: false,
	files: ["./public/*.css", "./public/*.html"],
	server: "public",
	// Wait 2 seconds after a reload event before allowing more.
	reloadDebounce: 2000,
	injectChanges: false,
};
