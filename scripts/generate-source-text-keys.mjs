import { readFile, writeFile } from "node:fs/promises";

const enMessages = JSON.parse(await readFile("messages/en.json", "utf8"));
const sourceTextKeys = Object.fromEntries(
	Object.entries(enMessages)
		.filter(([key]) => key !== "$schema")
		.map(([key, value]) => [value, key])
);

await writeFile(
	"js/source-text-keys.js",
	`export const sourceTextKeys = ${JSON.stringify(sourceTextKeys, null, 2)};\n`
);
