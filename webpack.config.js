const path = require("path");
const glob = require("glob");
const config = require("@wordpress/scripts/config/webpack.config");
const CopyPlugin = require("copy-webpack-plugin");

const getEntries = () => {
	const srcDir = "./src/blocks";
	const entries = {};
	glob
		.sync("*/index.ts", {
			cwd: srcDir,
		})
		.forEach((key) => {
			entries["blocks/" + key.replace("/index.ts", "/index")] = path.resolve(
				srcDir,
				key
			);
		});
	return entries;
};

const entry = getEntries();

module.exports = {
	...config,
	entry: { ...entry, tailwind: "./src/tailwind.css" },
	plugins: [
		...config.plugins,
		new CopyPlugin({
			patterns: [{ context: "./src", from: "./blocks/**/*.php" }],
		}),
	],
};
