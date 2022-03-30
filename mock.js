function mockFunction() {
  console.log("mockFunction has been executed");
  window.fetch("/do/not/fetch/this");
  return "mockFunction";
}

export { mockFunction };
