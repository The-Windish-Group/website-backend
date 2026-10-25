import * as fs from "node:fs";
export const data = JSON.parse(fs.readFileSync("../data/wnen.json").toString());
