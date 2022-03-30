<template>bla</template>

<script>
import { mockFunction } from "./mock.js";
import { importAlias } from "./importAlias.js";


export default {
  name: 'Component',
  setup() {
    function main() {
      mockFunction();
      importAlias();
      console.log("main has been executed");
    }
    main()
  }
}
</script>
