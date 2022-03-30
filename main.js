import { mockFunction } from "./mock.js";
import { importAlias } from "./importAlias.js";

function main() {
  mockFunction();
  importAlias();
  console.log("main has been executed");
}

export { main };
