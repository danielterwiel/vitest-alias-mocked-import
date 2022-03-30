// console.log("break it");

import { aliasedMockFunction } from "random";

function importAlias() {
  console.log("importAlias has been executed");
  aliasedMockFunction();
}

export { importAlias };
