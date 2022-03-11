const { join } = require("path");

module.exports = {
	presets: [require("../tailwind.config.js")],
	content: [join(__dirname, "../src/**/*.{ts,tsx}")],
};
